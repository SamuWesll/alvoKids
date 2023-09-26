import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberUrl } from '../const/url/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getPendingCheckout(idFamily: number) :Observable<any> {
    const url = MemberUrl.HTTP_GET_CHECKOUT;
    return this.http.get<any>(url, {
      headers: {
        'idFamily': `${idFamily}`
      }
    })
  }
}
