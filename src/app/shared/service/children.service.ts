import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { ChildrenModel, ChildrenStorage } from '../model/Children.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChildrenUrl } from '../const/url/children';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  private keyChildren: string = 'children';

  constructor(
    private storage: StorageService,
    private login: LoginService,
    private http: HttpClient,
    ) { }

  setVisitorStorage(children: ChildrenStorage) {
    var result = this.getVisitorStorage() as any;

    if (result == null) {
      this.storage.setItem(this.keyChildren, [children])
    } else {
      result.push(children);
      this.storage.setItem(this.keyChildren, result)
    }
  }

  getVisitorStorage() {
    let visitorStorage;
    this.storage.getItem(this.keyChildren).subscribe((result: ChildrenStorage) => {
      visitorStorage = result;
    });

    return visitorStorage;
  }

  postChildren(children: ChildrenModel) :Observable<void> {
    let url = ChildrenUrl.HTTP_CHILDREN;
    let auth = this.login.getTokenLocalStorage() as any;

    console.log(auth)

    return this.http.post<void>(url, children, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }

  getChildren() :Observable<ChildrenModel[]> {
    let url = ChildrenUrl.HTTP_CHILDREN;
    let auth =  this.login.getTokenLocalStorage() as any;

    return this.http.get<ChildrenModel[]>(url, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }

}
