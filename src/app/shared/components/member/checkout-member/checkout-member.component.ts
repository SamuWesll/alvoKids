import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusChildren } from 'src/app/shared/model/Children.model';
import { MemberCheckOut } from 'src/app/shared/model/Member.model';
import { VisitorCheckOutRequest } from 'src/app/shared/model/Visitor.model';
import { ErrorCustomService } from 'src/app/shared/service/error-custom.service';
import { MemberService } from 'src/app/shared/service/member.service';

@Component({
  selector: 'app-checkout-member',
  templateUrl: './checkout-member.component.html',
  styleUrls: ['./checkout-member.component.scss']
})
export class CheckoutMemberComponent implements OnInit {

  isCheckOutFinish = false;

  @Input() checkout?: MemberCheckOut;
  @Output() refresh = new EventEmitter();

  constructor(
    private memberService: MemberService,
    private errorCustom: ErrorCustomService) {

  }
  ngOnInit(): void {
    this.isCheckOutFinishi(this.checkout as any)
  }

  checkOuAll() {
    var body: VisitorCheckOutRequest = {
      code: '',
      codes_children: this.checkout?.childrens.map(r => r.id) as Number[],
     }

     this.memberService.postCheckOut(body).subscribe(
      result => {
        this.refresh.emit()
      },
      error => {
        this.errorCustom.validationErrorMember(error)
      }
     )
  }

  private isCheckOutFinishi(checkout: MemberCheckOut) {
    var result = checkout.childrens.filter(c => c.status == StatusChildren.WITHDRAWN || c.status == StatusChildren.CHECK_IN_FINISH)

    if (result.length != 0) {
      this.isCheckOutFinish = true;
    }
  }

}
