import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { AdminURL } from '../const/url/admin';
import { Observable } from 'rxjs';
import { PageableModel } from '../model/Pageable.model';
import { CheckModel } from '../model/Children.model';
import { LoginResponse } from '../model/User.model';
import { CultResponse, MeetingRequest } from '../model/Cult.model';
import { RoomRequest, RoomResponse } from '../model/RoomResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  keyToken = "key_token_admin";

  constructor(
    private http: HttpClient,
    private localStorage: StorageService) {

  }

  private addHeaders() {
    let auth = this.getToken() as any;

    return {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    }
  }

  submitLogin(login: string, password: string) :Observable<LoginResponse> {
    let url = AdminURL.HTTP_LOGIN;
    return this.http.post<LoginResponse>(url, {
      login, 
      password,
    })
  }

  setTokenLocalStorage(token: LoginResponse) {
    this.localStorage.setItem(this.keyToken, token);
  }

  getCheckPeding() {
    const url = AdminURL.HTTP_CHECK;
    let auth = this.getToken() as any;

    return this.http.get<PageableModel<CheckModel>>(url, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }

  getToken() {
    let token;

    this.localStorage.getItem(this.keyToken).subscribe((result: LoginResponse) => {
      token = result;
    })

    return token;
  }

  submitUpdateCheckin(id: number, status: string) {
    let url = AdminURL.HTTP_CHECKIN_UPDATE + `?id=${id}&status=${status}`;
    let auth = this.getToken() as any;

    return this.http.post<any>(url, {}, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }

  searchMeetAll(page: number, size: number): Observable<PageableModel<CultResponse>> {
    const url = AdminURL.HTTP_MEET + `?page=${page}&size=${size}`;
    let auth = this.getToken() as any;

    return this.http.get<PageableModel<CultResponse>>(url, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    })
  }

  createMeeting(meet: MeetingRequest) {
    const url = AdminURL.HTTP_MEET;

    return this.http.post(url, meet, this.addHeaders())
  }

  createRoom(room: RoomRequest) {
    const url = AdminURL.HTTP_ROOM;
    let auth = this.getToken() as any;

    return this.http.post(url, room, {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    })
  }

  searchRoomAll(page: number, size: number): Observable<PageableModel<RoomResponse>> {
    const url = AdminURL.HTTP_ROOM + `?page=${page}&size=${size}`;
    let auth = this.getToken() as any;

    return this.http.get<PageableModel<RoomResponse>>(url,  {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    })
  }

}
