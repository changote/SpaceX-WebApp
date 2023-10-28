import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entidades/user';
import { HttpService } from 'src/app/servicios/http/http.service';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  private static dialogRef: MatDialogRef<LoginComponent>;
  hide = true;
  loginOk = false;
  userLogged: any;
  users: User[] = [];
  userData: User = {
    username: '',
    password: ''
  };
  gotoRegistro = false;
  mensajeError = '';

  ngOnInit() {
    this.getUsuarios();
  }

  constructor(private httpService: HttpService, private authService: AuthService, private dialog: MatDialog){

  }
  async onSubmit() {
    for (let user of this.users) {
      if (user.username == this.userData.username && user.password == this.userData.password) {
        console.log("login ok");
        this.loginOk = true;
        break;
      }
    }
    if (this.loginOk) {
      try {
        this.getUserData(this.userData.username);
      } catch (error) {
        console.error(error);
      }
    }
    else if(!this.gotoRegistro){
      this.mensajeError = 'Credenciales incorrectas!';
    }
  }
  private getUsuarios(){
    this.httpService.realizarGet(Urls.urlJsonSvUsers).subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  
  private getUserData(username: string) {
    this.httpService.realizarGet(Urls.urlJsonSvUserData + "?username=" + username).subscribe(
      (data: any) => {
        this.userLogged = data;
        this.authService.setUser(this.userLogged[0]);
        window.location.reload();
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
