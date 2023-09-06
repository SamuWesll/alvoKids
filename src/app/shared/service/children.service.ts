import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { ChildrenStorage } from '../model/Children.model';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  private keyChildren: string = 'children';

  constructor(private storage: StorageService) { }

  setVisitorStorage(children: ChildrenStorage) {
    var result = this.getVisitorStorage() as any;

    if (result == null) {
      this.storage.setItem(this.keyChildren, [children])
    } else {
      // const childrenStorage = JSON.parse(result) as Array<ChildrenStorage>;
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

}
