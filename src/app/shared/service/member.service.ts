import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberUrl } from '../const/url/member';
import { LoginCreateRequest, MemberCheckIN, MemberCheckOut } from '../model/Member.model';
import { LoginService } from './login.service';
import { VisitorCheckOutRequest } from '../model/Visitor.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
    ) { }

  getPendingCheckout() :Observable<MemberCheckOut> {
    const url = MemberUrl.HTTP_GET_CHECKOUT;
    let auth =  this.loginService.getTokenLocalStorage() as any;

    return this.http.get<MemberCheckOut>(url, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    })
  }

  postCheckIn(body: MemberCheckIN) :Observable<any> {
    const url = MemberUrl.HTTP_POST_CHECKIN;
    let auth =  this.loginService.getTokenLocalStorage() as any;

    return this.http.post<any>(url, body, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }

  createLogin(login: LoginCreateRequest) :Observable<any> {
    const url = MemberUrl.HTTP_POST_CREATE_LOGIN;

    return this.http.post<any>(url, login);
  }

  postCheckOut(checkout: VisitorCheckOutRequest) {
    const url = MemberUrl.HTTP_POST_CHECKOUT;
    let auth =  this.loginService.getTokenLocalStorage() as any;

    return this.http.post<any>(url, checkout, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }
}
