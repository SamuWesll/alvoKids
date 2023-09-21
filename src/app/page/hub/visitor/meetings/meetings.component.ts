import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/shared/service/visitor.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  checkin:boolean = true;

  constructor(private visitorService: VisitorService) {
    
  }

  ngOnInit(): void {
    this.checkLocalStorage()
  }

  checkIN(value: any) {
    this.checkin = value
  }

  checkLocalStorage() {
    if(this.visitorService.getCodeCheckStorage()) {
      this.checkin = false;
    }
  }

}
