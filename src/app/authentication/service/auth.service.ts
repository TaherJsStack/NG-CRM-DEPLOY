// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IAuthDummy, IFUllAuthDummy } from '../models';

const ENV = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private tokenExpirationTimer: any;

  get currentUser(): IAuthDummy | null {
    if (ENV.CURRENT_USER in localStorage) {      
      const userJSON = localStorage.getItem(ENV.CURRENT_USER);
      if (userJSON) {
        return JSON.parse(userJSON) as IAuthDummy;
      }
    }
    return null;
  }

  set currentUser(user: IAuthDummy) {
    localStorage.setItem(ENV.CURRENT_USER, JSON.stringify(user));
  }

  get appToken(): string | null {
    if (ENV.APP_TOKEN in localStorage) {      
      const TOKEN = localStorage.getItem(ENV.APP_TOKEN);
      if (TOKEN) {
        return TOKEN;
      }
    }
    return null;
  }

  set appToken(token: string) {
    localStorage.setItem(ENV.APP_TOKEN, token);
  }

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<IAuthDummy> {
    let object = {
      username: 'kminchelle',
      password: '0lelplR',
      expiresInMins: ENV.REFRESH_TOKEN_TIME, // optional, defaults to 60
    }
    return this.http.post<IAuthDummy>(`${ENV.DUMMYJSON_API}/login`, object);
  }

  getuserData(): Observable<IFUllAuthDummy> {
    return this.http.get<IFUllAuthDummy>(`${ENV.DUMMYJSON_API}/me`);
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(`${ENV.DUMMYJSON_API}/refresh`, {expiresInMins: ENV.REFRESH_TOKEN_TIME})  
  }

  clearCurrentUser() {
    localStorage.clear()
  }

}
