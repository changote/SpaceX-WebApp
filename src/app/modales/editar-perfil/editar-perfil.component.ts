import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Registro, User } from 'src/app/entidades/model-implements';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  public perfil: Registro = new Registro();
  repeatPassword = '';
  userExists: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpService: HttpService, private dialogRef: MatDialogRef<EditarPerfilComponent>, private authService: AuthService) {}
  
  ngOnInit(): void {
    this.perfil = this.data;
    console.log(this.perfil);
  }

  public onSubmit() {
    this.httpService.realizarPut(Urls.urlJsonSv + 'person/', this.perfil.id!, this.perfil).subscribe({
      next: () => this.dialogRef.close(true),
      error: (error) => alert(error),
    });
    let user: User = new User();
    user.id = this.perfil.id;
    user.username = this.perfil.username;
    user.password = this.perfil.password;

    this.httpService.realizarPut(Urls.urlJsonSv + 'users/', user.id!, user).subscribe({
      next: () => this.dialogRef.close(true),
      error: (error) => alert(error),
    });
    this.authService.setUser(this.perfil);
  }

  public closeDialog() {
    this.dialogRef.close(false);
  }

  contrasenasCoinciden(): boolean {
    return this.perfil.password === this.repeatPassword;
  }
  todoOk(): boolean {
    return (
      !!this.perfil.name &&
      !!this.perfil.last_name &&
      !!this.perfil.gender &&
      !!this.perfil.email &&
      !!this.perfil.password &&
      !!this.repeatPassword &&
      this.contrasenasCoinciden()
    );
  }
  
}

