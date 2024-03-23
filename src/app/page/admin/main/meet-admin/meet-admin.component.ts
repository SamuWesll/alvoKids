import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { faDoorClosed, faDoorOpen, faPlaceOfWorship, faPlus, faThumbsDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CultResponse, MeetingRequest } from 'src/app/shared/model/Cult.model';
import { PageableModel } from 'src/app/shared/model/Pageable.model';
import { AdminService } from 'src/app/shared/service/admin.service';
import { ErrorCustomService } from 'src/app/shared/service/error-custom.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoomResponse } from 'src/app/shared/model/RoomResponse.model';
import { ThemePalette } from '@angular/material/core';
import { dayWeek } from 'src/app/shared/helper/mask.helper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Task {
  name: string;
  id?: number,
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-meet-admin',
  templateUrl: './meet-admin.component.html',
  styleUrls: ['./meet-admin.component.scss'],
})
export class MeetAdminComponent implements AfterViewInit {

  faPlace = faPlaceOfWorship;
  faOpen = faDoorOpen;
  faClosed = faDoorClosed;
  faCanceled = faThumbsDown;
  faPlus = faPlus;
  faXmark = faXmark;

  pageSize = 10;
  length = 3;
  task: Task = {
    name: 'Todos',
    completed: false,
    color: 'accent',
  }
  allComplete: boolean = false;
  form!: FormGroup;
  loading = true;

  displayedColumns: string[] = ['id', 'culto', 'date','local', 'status', 'action'];
  dataSource: Array<CultResponse> = [];
  result: PageableModel<CultResponse> | undefined;
  rooms: Array<RoomResponse> | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private admiService: AdminService,
    private erroCustom: ErrorCustomService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {}

  criarFormulario(): void {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      local: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      meeting_date: ['', [
        Validators.required,
      ]],
    })
  }

  ngAfterViewInit(): void {
    this.findMeetAll(0, this.pageSize);
    this.searchRoomAll();
    this.criarFormulario();
  }

  private findMeetAll(page: number, size: number) {
    this.admiService.searchMeetAll(page, size).subscribe(
      result => {
        this.dataSource = result.content;
        this.result = result;
        this.length = result.totalElements
      },
      erro => {
        this.erroCustom.validationError(erro, "/admin/login");
        this.openSnackBar("Erro ao consultar reuniões!")
      }
    )
  }

  maskDate(date: string) {
    const dateFormat = new Date(date);

    return `${dateFormat.toISOString().substr(0, 10).split('-').reverse().join('/')} (${dayWeek(dateFormat.getUTCDay())})`;
  }

  public handlePage(e: any) {
    this.findMeetAll(e.pageIndex, this.pageSize);
  }

  openDialog(content: any) {
    this.dialog.open(content, {
      width: '50vw',
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Fechar", {
      duration: 1500,
    });
  }

  searchRoomAll() {
    this.admiService.searchRoomAll(0, 50).subscribe(
      result => {
          this.rooms = result.content;
          this.task.subtasks = this.rooms.map(room => {
            var subTask: Task = {
              name: room.name,
              id: room.id,
              color: 'primary',
              completed: false,
            }
            return subTask;
          })
      })
  }

  updateAllComplete(index: number) {
    if (this.task.subtasks != null) {
      this.task.subtasks[index].completed = !this.task.subtasks[index].completed;
    }

    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null ) {
      return false;
    }

    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;

    this.task.subtasks?.forEach(s => s.completed = completed);
  }

  submit() {
    const { meeting_date, name, local } = this.form.value;
    let date = new Date(meeting_date).toISOString();
    let roomsId = this.task.subtasks?.filter(s => s.completed)
      .map(sub => sub.id) as [];

    const request: MeetingRequest = {
      name,
      local,
      meeting_date: date,
      rooms_id: roomsId,
    }

    this.loading = !this.loading

    this.admiService.createMeeting(request).subscribe(
      result => {
        this.form.reset();
        this.findMeetAll(0, this.pageSize)
        this.loading = true;
        this.dialog.closeAll();
      },
      erroContent => {
        this.erroCustom.validationError(erroContent, "/admin/login")
        const { error } = erroContent;
        this.openSnackBar(`Erro ao cadastrar reunião, descrição: ${error.description}`)
      }
    )
    
  }

}
