import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorCustomService {

  constructor(
    private router: Router,
    private localStorage: StorageService,
    ) { }

  validationErrorMember(error: any) :any{
    this.erroForbidden(error.status, '')
  }

  validationError(error: any, url: string) :any{
    this.erroForbidden(error.status, url)
  }

  private erroForbidden(code: any, url: string) {
    if (code == 403) {
      this.localStorage.removerAll();
      this.router.navigateByUrl(url);
    }
  }
}
