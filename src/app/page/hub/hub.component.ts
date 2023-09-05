import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  constructor(private router: Router) {

  }

  navegateURL(url: string): void  {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    
  }

}
