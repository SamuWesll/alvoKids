import { Component, OnInit } from '@angular/core';
import { faDoorClosed, faDoorOpen, faPlaceOfWorship, faPlus, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { CultResponse } from 'src/app/shared/model/Cult.model';
import { PageableModel } from 'src/app/shared/model/Pageable.model';
import { AdminService } from 'src/app/shared/service/admin.service';
import { ErrorCustomService } from 'src/app/shared/service/error-custom.service';

@Component({
  selector: 'app-meet-admin',
  templateUrl: './meet-admin.component.html',
  styleUrls: ['./meet-admin.component.scss']
})
export class MeetAdminComponent implements OnInit {

  faPlace = faPlaceOfWorship;
  faOpen = faDoorOpen;
  faClosed = faDoorClosed;
  faCanceled = faThumbsDown;
  faPlus = faPlus;

  displayedColumns: string[] = ['id', 'culto', 'date','local', 'status', 'action'];
  dataSource: Array<CultResponse> = [];
  result: PageableModel<CultResponse> | undefined;

  constructor(
    private admiService: AdminService,
    private erroCustom: ErrorCustomService,
  ) {}

  ngOnInit(): void {
    this.findMeetAll(0, 15);
  }

  private findMeetAll(page: number, size: number) {
    this.admiService.searchMeetAll(page, size).subscribe(
      result => {
        this.dataSource = result.content;
        this.result = result;
      },
      erro => {
        this.erroCustom.validationError(erro, "/admin/login");
      }
    )
  }

  maskDate(date: string) {
    const dateFormat = new Date(date);

    return `${dateFormat.toISOString().substr(0, 10).split('-').reverse().join('/')} (${this.dayWeek(dateFormat.getUTCDay())})`;
  }

  private dayWeek(dayNumber: number) {
    let day;
    switch(dayNumber) {
      case 0:
        day = 'domingo'
        break;
      case 1:
        day = 'segunda'
        break
      case 2:
        day = 'terça'
        break
      case 3:
        day = 'quarta'
        break
      case 4:
        day = 'quinta'
        break
      case 5:
        day = 'sexta'
        break
      case 6:
        day = 'sábado'
        break
      default:
        day = '';
        break
    }

    return day;
  }

}
