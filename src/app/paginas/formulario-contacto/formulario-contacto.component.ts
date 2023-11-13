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
  loading: boolean = true;
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
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  submit(){
    const resp = this.http.realizarPost(Urls.urlJsonSv + 'travel_request',this.formulario).subscribe({
      next: () => {
        this.mensaje = "Enviado correctamente!";
        this.mensajeBoolean = true;
      },
      error: () => {
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
