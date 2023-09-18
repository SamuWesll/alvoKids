import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitor } from '../model/Visitor.model';
import { Observable } from 'rxjs';
import { ResponsibleUrl } from '../const/url/responsible';
import { ParentModel } from '../model/Parent.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {

  constructor(private http: HttpClient) { }

  responsiblePost(payload: Visitor) :Observable<void> {
    let url = ResponsibleUrl.HTTP_RESPONSIBLE;
    return this.http.post<void>(url, payload);
  }

  responsibleGet() :Observable<ParentModel[]> {
    let url = ResponsibleUrl.HTTP_RESPONSIBLE;
    return this.http.get<ParentModel[]>(url);
  }
}
