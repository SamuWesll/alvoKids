import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberUrl } from '../const/url/member';
import { LoginCreateRequest, MemberCheckIN, MemberCheckOut } from '../model/Member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getPendingCheckout(idFamily: number) :Observable<MemberCheckOut> {
    const url = MemberUrl.HTTP_GET_CHECKOUT;
    return this.http.get<MemberCheckOut>(url, {
      headers: {
        'idFamily': `${idFamily}`
      }
    })
  }

  postCheckIn(body: MemberCheckIN) :Observable<any> {
    const url = MemberUrl.HTTP_POST_CHECKIN;

    return this.http.post<any>(url, body);
  }

  createLogin(login: LoginCreateRequest) :Observable<any> {
    const url = MemberUrl.HTTP_POST_CREATE_LOGIN;

    return this.http.post<any>(url, login);
  }
}
