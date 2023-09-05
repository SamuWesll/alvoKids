import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Visitor } from '../model/Visitor.model';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private keyVisitor: string = 'visitor';

  constructor(private storage: StorageService) { }

  setVisitor(visitor: Visitor) {
    this.storage.setItem(this.keyVisitor, visitor)
  }

  getVisitor() {
    let visitorStorage;
    this.storage.getItem(this.keyVisitor).subscribe((result: Visitor) => {
      visitorStorage = result;
    });

    return visitorStorage;
  }

}
