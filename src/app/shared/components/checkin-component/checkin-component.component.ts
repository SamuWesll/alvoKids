import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VisitorService } from '../../service/visitor.service';
import { ChildrenService } from '../../service/children.service';
import { CultResponse } from '../../model/Cult.model';
import { RoomResponse } from '../../model/RoomResponse.model';
import { ChildrenStorage } from '../../model/Children.model';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Visitor, VisitorCheckIN } from '../../model/Visitor.model';

@Component({
  selector: 'app-checkin-component',
  templateUrl: './checkin-component.component.html',
  styleUrls: ['./checkin-component.component.scss']
})
export class CheckinComponentComponent implements OnInit {

  cult!: CultResponse;
  rooms: Array<RoomResponse> = [];
  childrens: Array<ChildrenStorage> = [];
  childrensNotMeet: Array<ChildrenStorage> = [];
  childrensSelected: Array<ChildrenStorage> = [];
  responsible: Visitor | undefined;
  faExclamation = faExclamationTriangle
  checkInLoading = false;
  checkin:boolean = false;
  @Output() check = new EventEmitter<boolean>();

  constructor(
    private visitorService: VisitorService,
    private childrenService: ChildrenService,
  ) {

  }

  ngOnInit(): void {
    this.getCult();
    this.responsible = this.visitorService.getVisitorStorage();
    this.isCodeCheck();
  }

  maskDate(dat: Date) {
    const date = new Date(dat)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }

  private getCult() {
    this.visitorService.getCult().subscribe(result => {
      this.cult = result;
      this.getChildrenStorage();
      this.filterChildrensByMeet();
    })
  }

  private getChildrenStorage() {
    this.childrens = this.childrenService.getVisitorStorage() as any;
    this.childrensNotMeet = this.childrenService.getVisitorStorage() as any;
  }

  private filterChildrensByMeet() {
    this.cult?.rooms?.forEach(room => {
      const { maximum, minimum } = room.age_group;
      
      const sons = this.childrens.filter(c => {
        return this.calcAge(c.birthDate) >= minimum && this.calcAge(c.birthDate) <= maximum
      })

      if (sons.length > 0) {
        this.removeInMeet(sons);
        room.childrens = sons as any;
        this.rooms.push(room)
      }
    })
  }

  selectedChildren(value: any) {
    const children = value as ChildrenStorage;
    const list = this.childrensSelected;

    if (list.length == 0) {
      this.childrensSelected.push(children);
    } else {
      list.forEach((c, i) => {
        if (c.fullName == children.fullName) {
          this.childrensSelected.splice(i, 1);
        } else {
          this.childrensSelected.push(children);
        }
      })
    }
  }

  private calcAge(date: string) {
    var birthday = +new Date(date);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  private removeInMeet(childrens: Array<ChildrenStorage>) {
    this.childrensNotMeet.forEach((s, i) => {
      const value = childrens.filter(son => son.fullName === s.fullName);

      if (value.length > 0) {
        this.childrensNotMeet.splice(i, 1);
      }
    })
  }

  isCodeCheck() {
    if (this.visitorService.getCodeCheckStorage() != null) {
      this.checkin = true;
    }
  }

  async awaitingCheckIn() {
    setTimeout(() => {
      this.checkInLoading = false;
      this.check.emit(false);
    }, 3000);
  }

  submitCheckIn() {
    let checkIn: VisitorCheckIN = {
      id_cult: this.cult.id_cult,
      responsible: this.responsible as Visitor,
      childrens: this.childrensSelected,
    }

    this.visitorService.checkIN(checkIn).subscribe(result => {
      this.visitorService.setCodeCheckStorage(result);
      this.checkInLoading = true;
      this.awaitingCheckIn()
    }, erro => {
      alert(erro.message)
    })
  }

}
