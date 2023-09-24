import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../../service/visitor.service';
import { Visitor, VisitorCheckINResponse, VisitorCheckOUTResponse } from '../../model/Visitor.model';

@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.scss']
})
export class CheckoutComponentComponent implements OnInit {

  code: VisitorCheckINResponse | undefined;
  parent: Visitor | undefined;
  checkout?: VisitorCheckOUTResponse;

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
    })
  }

  getParentStorage() {
    this.parent = this.visitorService.getVisitorStorage()
  }

  checkOuAll() {
    
  }

}
