import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/shared/model/User.model';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-main-init',
  templateUrl: './main-init.component.html',
  styleUrls: ['./main-init.component.scss']
})
export class MainInitComponent implements OnInit {

  user: LoginResponse | undefined;

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    var result = this.loginService.getTokenLocalStorage()

    this.user = result;
  }

}
