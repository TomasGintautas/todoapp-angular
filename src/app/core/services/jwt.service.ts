import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken(): String {
    return window.localStorage['accessToken'];
  }

  saveToken(token: String) {
    window.localStorage['accessToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('accessToken');
  }

}
