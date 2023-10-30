import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Registro, User } from 'src/app/entidades/model-implements';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';
import { RegistroService } from 'src/app/servicios/registro/registro.service';
import { lastValueFrom } from 'rxjs';

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
  gotoRegistro = false;
  mensajeError = '';
  registroData: Registro = new Registro();
  repeatPassword = '';
  userExists: boolean = false;


  ngOnInit() {
    this.getUsuarios();
  }

  constructor(private httpService: HttpService, private registroService: RegistroService) {

  }
  async onSubmit() {
    await this.registroService.registroUsuario(this.registroData);
    window.location.reload();
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

  async checkUserExistence() {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlJsonSvUserData + "?username=" + this.registroData.username);
      const possibleUser = await lastValueFrom(responseApi);
      if (possibleUser !== null && (Array.isArray(possibleUser) ? possibleUser.length > 0 : true)) {
        this.userExists = true;
      }
      else {
        this.userExists = false;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

}
