import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entidades/user';
import { HttpService } from 'src/app/servicios/http/http.service';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';
import { Urls } from 'src/app/url-globales';
import { RegistroService } from 'src/app/servicios/registro/registro.service';
import { RegistroCompleto } from 'src/app/entidades/registroCompleto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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
  registroData: RegistroCompleto = {
    name: '',
    email: '',
    last_name: '',
    username: '',
    gender: '',
    age: 0,
    password: ''
  }
  repeatPassword = '';
  userExists: boolean = false;


  ngOnInit() {
    this.getUsuarios();
  }

  constructor(private httpService: HttpService, private authService: AuthService, private dialog: MatDialog, private registroService: RegistroService) {

  }
  async onSubmit() {
    this.registroService.registroUsuario(this.registroData);
  }
  private getUsuarios() {
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
  contrasenasCoinciden(): boolean {
    return this.registroData.password === this.repeatPassword;
  }
  todoOk(): boolean {
    return (
      !!this.registroData.name &&
      !!this.registroData.last_name &&
      !!this.registroData.username &&
      !!this.registroData.gender &&
      !!this.registroData.email &&
      !!this.registroData.password &&
      !!this.repeatPassword &&
      this.contrasenasCoinciden() &&
      !this.userExists
    );
  }

  checkUserExistence() {
    this.httpService.realizarGet(Urls.urlJsonSvUserData + "?username=" + this.registroData.username).subscribe(
      (data: any) => {
        const possibleUser = data;
        if (possibleUser !== null && (Array.isArray(possibleUser) ? possibleUser.length > 0 : true)) {
          this.userExists = true;
        }
        else
          this.userExists = false;
      },
      (error: any) => {
        console.error('Error:', error);
        this.userExists = false; // Set userExists to false in case of an error
      }
    );
  }
  
}
