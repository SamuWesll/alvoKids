import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../../service/visitor.service';
import { Visitor, VisitorCheckINResponse, VisitorCheckOUTResponse, VisitorCheckOutRequest } from '../../model/Visitor.model';
import { ParentModel } from '../../model/Parent.model';
import { StatusChildren } from '../../model/Children.model';

@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.scss']
})
export class CheckoutComponentComponent implements OnInit {

  code: VisitorCheckINResponse | undefined;
  parent: ParentModel | undefined;
  checkout?: VisitorCheckOUTResponse;
  isCheckOutFinish = false;

  constructor(private visitorService: VisitorService) {

  }

  ngOnInit(): void {
    this.getCodeStorage();
    this.getInfoCheckOut();
    this.getParentStorage()
  }

  getCodeStorage() {
    this.code = this.visitorService.getCodeCheckStorage();
  }

  getInfoCheckOut() {
    this.visitorService.getInfoCheckoutCode(this.code?.code as string).subscribe(result => {
        this.checkout = result;
        this.isCheckOutFinishi(result)
    })
  }

  private isCheckOutFinishi(checkout: VisitorCheckOUTResponse) {
    var result = checkout.childrens.filter(c => c.status == StatusChildren.WITHDRAWN || c.status == StatusChildren.CHECK_IN_FINISH)

    if (result.length != 0) {
      this.isCheckOutFinish = true;
    }
  }

  getParentStorage() {
    this.parent = this.visitorService.getVisitorStorage()
  }

  checkOuAll() {
    var body: VisitorCheckOutRequest = {
     code: this.code?.code as string,
     codes_children: this.checkout?.childrens.map(r => r.id) as Number[],
    }
    this.visitorService.postCheckout(body).subscribe(result => {
      this.getInfoCheckOut()
    })
  }


}
