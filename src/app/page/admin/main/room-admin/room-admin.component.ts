import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/service/admin.service';
import { RoomRequest } from 'src/app/shared/model/RoomResponse.model';

@Component({
  selector: 'app-room-admin',
  templateUrl: './room-admin.component.html',
  styleUrls: ['./room-admin.component.scss']
})
export class RoomAdminComponent implements AfterViewInit {

  form!: FormGroup;
  faPlus = faPlus;
  faXmark = faXmark;
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
  ) {}

  ngAfterViewInit(): void {
    this.criarFormulario()
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
      result => {
        this.form.reset();
        this.dialog.closeAll()
      })
  }

}
