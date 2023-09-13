import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserURL } from '../const/url/user';
import { LoginResponse } from '../model/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  submitLogin(login: string, password: string) :Observable<LoginResponse> {
    let url = UserURL.HTTP_LOGIN;
    return this.http.post<LoginResponse>(url, {
      login, 
      password,
    })
  }
}
