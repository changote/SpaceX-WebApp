import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;

  setUser(user: any) {
    if(this.isLoggedIn()){
      this.logout();
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return this.user;
  }

  isLoggedIn() {
    const userData = localStorage.getItem('user');
    return userData!=null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
