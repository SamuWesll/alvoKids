import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserURL } from '../const/url/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  submitLogin(login: string, password: string) {
    let url = UserURL.HTTP_LOGIN;
    return this.http.post<string>(url, {
      login, 
      password,
    })
  }
}
