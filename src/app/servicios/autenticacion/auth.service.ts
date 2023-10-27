import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any; // Puedes definir una interfaz o tipo de usuario más específico

  setUser(user: any) {
    if(this.isLoggedIn()){
      this.logout();
    }
    console.log(user);
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
