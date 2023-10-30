import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  setUser(user: any) {
    if(this.isLoggedIn()){
      this.logout();
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const userString = localStorage.getItem('user');
    if(userString)
    return JSON.parse(userString);
  }

  isLoggedIn() {
    const userData = localStorage.getItem('user');
    return userData!=null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
