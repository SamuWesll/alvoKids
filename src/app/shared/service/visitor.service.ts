import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Visitor, VisitorCheckIN, VisitorCheckINResponse } from '../model/Visitor.model';
import { HttpClient } from '@angular/common/http';
import { VisitorURL } from '../const/url/visitor';
import { CultResponse } from '../model/Cult.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private keyVisitor: string = 'visitor';
  private keyCheck: string = 'codeCheck';

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    ) { }

  setVisitorStorage(visitor: Visitor) {
    this.storage.setItem(this.keyVisitor, visitor)
  }

  getVisitorStorage() {
    let visitorStorage;
    this.storage.getItem(this.keyVisitor).subscribe((result: Visitor) => {
      visitorStorage = result;
    });

    return visitorStorage;
  }

  getCult() : Observable<CultResponse> {
    let url = VisitorURL.HTTP_GET_CULT;

    return this.http.get<CultResponse>(url);
  }

  removeVisitor() {
    this.storage.removeItem(this.keyVisitor);
  }

  checkIN(checkIN: VisitorCheckIN) :Observable<VisitorCheckINResponse> {
    let url = VisitorURL.HTTP_POST_CHECKIN;

    return this.http.post<VisitorCheckINResponse>(url, checkIN);
  }

  setCodeCheckStorage(code: VisitorCheckINResponse) {
    this.storage.setItem(this.keyCheck, code)
  }

  getCodeCheckStorage() {
    let codeCheckStorage;
    this.storage.getItem(this.keyCheck).subscribe((result: VisitorCheckINResponse) => {
      codeCheckStorage = result;
    });

    return codeCheckStorage;
  }

}
