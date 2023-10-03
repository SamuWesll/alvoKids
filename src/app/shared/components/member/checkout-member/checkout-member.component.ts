import { Component, Input, OnInit } from '@angular/core';
import { MemberCheckOut } from 'src/app/shared/model/Member.model';
import { MemberService } from 'src/app/shared/service/member.service';

@Component({
  selector: 'app-checkout-member',
  templateUrl: './checkout-member.component.html',
  styleUrls: ['./checkout-member.component.scss']
})
export class CheckoutMemberComponent implements OnInit {

  @Input() checkout?: MemberCheckOut;

  constructor(private memberService: MemberService) {

  }
  ngOnInit(): void {
    
  }

  checkOuAll() {
    
  }

}
