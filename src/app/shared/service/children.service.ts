import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { ChildrenModel, ChildrenStorage } from '../model/Children.model';
import { HttpClient } from '@angular/common/http';
import { ChildrenUrl } from '../const/url/children';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  private keyChildren: string = 'children';

  constructor(
    private storage: StorageService,
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

    return this.http.post<void>(url, children);
  }

  getChildren() :Observable<ChildrenModel[]> {
    let url = ChildrenUrl.HTTP_CHILDREN;

    return this.http.get<ChildrenModel[]>(url);
  }

}
