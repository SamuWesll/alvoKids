import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserURL } from '../const/url/user';
import { LoginResponse } from '../model/User.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  keyToken = "key_token";

  constructor(
    private http: HttpClient,
    private localStorage: StorageService
    ) { }

  submitLogin(login: string, password: string) :Observable<LoginResponse> {
    let url = UserURL.HTTP_LOGIN;
    return this.http.post<LoginResponse>(url, {
      login, 
      password,
    })
  }

  setTokenLocalStorage(loginResponse: LoginResponse) {
    this.localStorage.setItem(this.keyToken, loginResponse);
  }

  getTokenLocalStorage() {
    let token;

    this.localStorage.getItem(this.keyToken).subscribe(result => {
      token = result;
    })

    return token;
  }
}
