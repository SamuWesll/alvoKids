import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(chave: string): Observable<any> {
    if (this.contem(chave)) {
      const item = localStorage.getItem(chave);
      const itemJson = this.converterEmJson(item as string);
      return of(itemJson);
    }

    return EMPTY;
  }

  contem(chave: string): boolean {
    return !!localStorage.getItem(chave);
  }

  private converterEmJson(dado: string): any {
    try {
      return JSON.parse(dado);
    } catch (e) {
      return dado;
    }
  }
  
}
