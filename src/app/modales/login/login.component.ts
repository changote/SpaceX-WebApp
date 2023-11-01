import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entidades/model-implements';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';
import { RegistroComponent } from '../registro/registro.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private static dialogRef: MatDialogRef<LoginComponent>;
  hide = true;
  loginOk = false;
  userLogged: any;
  users: User[] = [];
  userData: User = new User();
  gotoRegistro = false;
  mensajeError = '';

  ngOnInit() {
  }

  constructor(private httpService: HttpService, private authService: AuthService, private dialog: MatDialog) {

  }
  async onSubmit() {
    if (await this.checkAuth()) {
      console.log("login ok");
      this.loginOk = true;
    }

    if (this.loginOk) {
      try {
        this.getUserData(this.userData.username);
      } catch (error) {
        console.error(error);
      }
    }
    else if (!this.gotoRegistro) {
      this.mensajeError = 'Credenciales incorrectas!';
    }
  }

  public async checkAuth(): Promise<boolean> {
    let users: User[] = [];
    try {
      let apiResponse = this.httpService.realizarGet(`${Urls.urlJsonSv}users/?username=${this.userData.username}&password=${this.userData.password}`);
      users = await lastValueFrom(apiResponse);
    } catch (error) {
      console.log(error);
    }
    return users.length == 1;
  }

  private async getUserData(username: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlJsonSv + "person/?username=" + username);
      this.userLogged = await lastValueFrom(responseApi);
      this.authService.setUser(this.userLogged[0]);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  public modalRegistro() {
    this.closeDialog();
    this.gotoRegistro = true;
    this.dialog.open(RegistroComponent);
  }

  static setDialogRef(dialogRef: MatDialogRef<LoginComponent>): void {
    LoginComponent.dialogRef = dialogRef;
  }

  closeDialog() {
    if (LoginComponent.dialogRef) {
      LoginComponent.dialogRef.close();
    }
  }

  todoOk(): boolean {
    return (
      !!this.userData.username &&
      !!this.userData.password
    );
  }

}
