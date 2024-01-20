import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitor } from '../model/Visitor.model';
import { Observable } from 'rxjs';
import { ResponsibleUrl } from '../const/url/responsible';
import { ParentModel } from '../model/Parent.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {

  constructor(
    private login: LoginService,
    private http: HttpClient
    ) { }

  responsiblePost(payload: Visitor) :Observable<void> {
    let url = ResponsibleUrl.HTTP_RESPONSIBLE;
    let auth =  this.login.getTokenLocalStorage() as any;

    return this.http.post<void>(url, payload,{
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }

  responsibleGet() :Observable<ParentModel[]> {
    let url = ResponsibleUrl.HTTP_RESPONSIBLE;
    let auth =  this.login.getTokenLocalStorage() as any;

    return this.http.get<ParentModel[]>(url, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }
}
