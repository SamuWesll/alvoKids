import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from 'src/app/shared/service/visitor.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  constructor(
    private router: Router,
    private visitorService: VisitorService
    ) {

  }

  navegateURL(url: string): void  {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    
  }

  getVisitorLocal() {
    if (this.visitorService.getVisitorStorage()) {
      this.router.navigateByUrl('visitor');
    } else {
      this.router.navigateByUrl('parents');
    }
  }

}
