import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Formulario, Registro, User } from 'src/app/entidades/model-implements';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit{
  formulario: Formulario = new Formulario();
  user: Registro = new Registro();
  mensaje: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  mensajeBoolean: boolean = true;

  constructor(private http: HttpService, private authService: AuthService){}
  ngOnInit(): void {
    this.getUserInfo();
    this.formulario = {
      id: null,
      nombre: this.user.name,
      email: this.user.email,
      comentario: '',
      status: 'PENDIENTE',
      username: this.user.username
    };
  }

  submit(){
    const resp = this.http.realizarPost(Urls.urlJsonSv + 'travel_request',this.formulario).subscribe({
      next: () => {
        console.log("Exito");
        this.mensaje = "Enviado correctamente!";
        this.mensajeBoolean = true;
      },
      error: () => {
        console.log("Error")
        this.mensaje = "Error!";
        this.mensajeBoolean = false;
      }
    })
  }

  getUserInfo(){
    const user: Registro = this.authService.getUser();
    this.user = user;
  }
}
