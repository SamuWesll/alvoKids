import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faCalendarAlt, faCamera, faChurch, faStar, faThumbsDown, faThumbsUp, faWarning } from '@fortawesome/free-solid-svg-icons';
import { maskAge } from 'src/app/shared/helper/mask.helper';
import { CheckModel } from 'src/app/shared/model/Children.model';
import { CultResponse } from 'src/app/shared/model/Cult.model';
import { PageableModel } from 'src/app/shared/model/Pageable.model';
import { AdminService } from 'src/app/shared/service/admin.service';
import { VisitorService } from 'src/app/shared/service/visitor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  faChurch = faChurch;
  faCamera = faCamera;
  faWarning = faWarning;
  faStar = faStar;
  faCalendar = faCalendarAlt;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  displayedColumns: string[] = ['id', 'fullname', 'age', 'room', 'info', 'action'];
  dataSource: Array<CheckModel> = [];
  result: PageableModel<CheckModel> | undefined;
  meet: CultResponse | undefined;

  constructor(
    private adminService: AdminService,
    private visitorService: VisitorService,
    ) {}

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.getCheckPeding();
    this.getCultOpen();
  }

  getCheckPeding() {
    this.adminService.getCheckPeding().subscribe(result => {
      this.result = result;
      this.dataSource = this.result.content;
    })
  }

  private getCultOpen() :void{
    this.visitorService.getCult().subscribe(result => {
      this.meet = result;
    })
  }

  maskAge(birthDate: string): string {
    return maskAge(birthDate);
  }

  maskRoom(id: number) {
    var room = this.meet?.rooms.find(room => room.id == id);

    return room?.name;
  }

  birthdayMonth(birthDate: string) {
    const date = new Date();
    const dateBirth = new Date(birthDate as string)

    return date.getMonth() == dateBirth.getMonth();
  }

}
