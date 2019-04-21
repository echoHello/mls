import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public protected = false;
  constructor() { }

  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
    this.protected = true;
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    this.protected = false;
  }
}
