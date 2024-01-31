import { Component, EventEmitter, Output } from '@angular/core';
import { ChildrenModel } from 'src/app/shared/model/Children.model';
import { CultResponse } from 'src/app/shared/model/Cult.model';
import { RoomResponse } from 'src/app/shared/model/RoomResponse.model';
import { ChildrenService } from 'src/app/shared/service/children.service';
import { VisitorService } from 'src/app/shared/service/visitor.service';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberCheckIN } from 'src/app/shared/model/Member.model';
import { MemberService } from 'src/app/shared/service/member.service';

@Component({
  selector: 'app-checkin-member',
  templateUrl: './checkin-member.component.html',
  styleUrls: ['./checkin-member.component.scss']
})
export class CheckinMemberComponent {
  cult!: CultResponse;
  rooms: Array<RoomResponse> = [];
  childrens: Array<ChildrenModel> = [];
  childrensNotMeet: Array<ChildrenModel> = [];
  childrensSelected: Array<ChildrenModel> = [];
  checkInLoading = false;
  @Output() check = new EventEmitter<boolean>();

  faExclamation = faExclamationTriangle
  formGroup!: FormGroup;

  constructor(
    private visitorService: VisitorService,
    private childrenService: ChildrenService,
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    ) {
    
  }

  criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      idParent: [0, [
        Validators.required,
        Validators.min(1)
      ]],
    })
  }

  maskDate(dat: Date) {
    const date = new Date(dat)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }

  ngOnInit(): void {
    this.getCult();
    this.criarFormulario()
  }

  private getCult() {
    this.visitorService.getCult().subscribe(result => {
      this.cult = result;
      this.getChildren();
    })
  }

  private getChildren() {
    this.childrenService.getChildren().subscribe(result => {
      this.childrens = result;
      this.childrensNotMeet = result;
      this.filterChildrensByMeet();
    });
  }

  private filterChildrensByMeet() {
    this.cult?.rooms.forEach(room => {
      const { maximum, minimum } = room.age_group;
      
      const sons = this.childrens.filter(c => {
        return this.calcAge(c.birthDate) >= minimum && this.calcAge(c.birthDate) <= maximum
      })

      if (sons.length > 0) {
        this.removeInMeet(sons);
        room.childrens = sons;
        this.rooms.push(room)
      }
    })
  }

  private calcAge(date: string) {
    var birthday = +new Date(date);
    return ~~((Date.now() - birthday) / (31557600000));
  }

  private removeInMeet(childrens: Array<ChildrenModel>) {
    this.childrensNotMeet.forEach((s, i) => {
      const value = childrens.filter(son => son.fullName === s.fullName);

      if (value.length > 0) {
        this.childrensNotMeet.splice(i, 1);
      }
    })
  }

  selectedChildren(value: any) {
    const children = value as ChildrenModel;
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

  submitCheckIn() {
    const { idParent } = this.formGroup.value;

    let checkIn: MemberCheckIN = {
      childrens: this.childrensSelected.map(c => {
        return {
          id_children: c.id,
          id_room: c.idRoom,
        }
      }) as any,
      id_parent: Number.parseInt(idParent),
      id_cult: this.cult.id_cult,
    }

    this.memberService.postCheckIn(checkIn).subscribe(result => {
      this.awaitingCheckIn()
    })
  }

  async awaitingCheckIn() {
    this.checkInLoading = true;
    setTimeout(() => {
      this.checkInLoading = false;
      this.check.emit(false);
    }, 3000);
  }
}
