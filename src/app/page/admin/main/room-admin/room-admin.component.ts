import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { faPlus, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/service/admin.service';
import { RoomRequest, RoomResponse } from 'src/app/shared/model/RoomResponse.model';
import { ErrorCustomService } from 'src/app/shared/service/error-custom.service';

@Component({
  selector: 'app-room-admin',
  templateUrl: './room-admin.component.html',
  styleUrls: ['./room-admin.component.scss']
})
export class RoomAdminComponent implements AfterViewInit {

  form!: FormGroup;
  faPlus = faPlus;
  faXmark = faXmark;
  faExclamation = faTriangleExclamation;
  loading = true;
  pageSize = 5;
  length = 0;

  dataSource: Array<RoomResponse> = [];
  displayedColumns: string[] = ['id', 'name', 'total_vacancies', 'age_minimum', 'age_maximum'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private erroCustom: ErrorCustomService,
  ) {}

  ngAfterViewInit(): void {
    this.criarFormulario()
    this.searchRoomAll(0, this.pageSize)
  }

  criarFormulario(): void {
    this.form = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      totalVacancies: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      ageMininum: ['', [
        Validators.required,
      ]],
      ageMaximum: ['', [
        Validators.required,
      ]],
    })
  }

  openDialog(content: any) {
    this.dialog.open(content, {
      width: '50vw',
    });
  }

  submit() {
    this.loading = false;
    const { title, totalVacancies, ageMininum, ageMaximum } = this.form.value;
    const request: RoomRequest = {
      name: title,
      total_vacancies: totalVacancies,
      age_group: {
        maximum: ageMaximum,
        minimum: ageMininum,
      }
    }

    this.adminService.createRoom(request).subscribe(
      () => {
        this.form.reset();
        this.dialog.closeAll()
        this.searchRoomAll(0, this.pageSize)
        this.loading = true;
      },
      erro => {
        this.erroCustom.validationError(erro, "/admin/login");
      })
  }

  searchRoomAll(page: number, size: number): void {
    this.adminService.searchRoomAll(page, size).subscribe(
      result => {
        this.dataSource = result.content;
        this.length = result.totalElements
      },
      erro => {
        this.erroCustom.validationError(erro, "/admin/login");
      })
  }

  handlePage(e: any) {
    this.searchRoomAll(e.pageIndex, this.pageSize);
  }

  maskAge(age: number): string {
    if (age > 1) {
      return `${age} anos`
    } else if (age == 1) {
      return `${age} ano`
    } else {
      return `${age}`
    }
  }

}
