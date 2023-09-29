import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ChildrenModel } from 'src/app/shared/model/Children.model';
import { CultResponse } from 'src/app/shared/model/Cult.model';
import { RoomResponse } from 'src/app/shared/model/RoomResponse.model';
import { ChildrenService } from 'src/app/shared/service/children.service';
import { MemberService } from 'src/app/shared/service/member.service';
import { VisitorService } from 'src/app/shared/service/visitor.service';

@Component({
  selector: 'app-main-meetings',
  templateUrl: './main-meetings.component.html',
  styleUrls: ['./main-meetings.component.scss']
})
export class MainMeetingsComponent implements OnInit {
  checkin:boolean = true;

  constructor(private memberService: MemberService) {
    
  }
  ngOnInit(): void {
    this.getCheckout()
  }

  private getCheckout() {
    this.memberService.getPendingCheckout(0).subscribe(result => {
      if (result != null) {
        this.checkin = false;
      }
    })
  }

  checkIN(value: any) {
    this.checkin = value
  }

}
