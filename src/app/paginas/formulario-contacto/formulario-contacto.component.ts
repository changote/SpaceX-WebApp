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
  userEmail: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private http: HttpService, private authService: AuthService){}
  ngOnInit(): void {
    this.getUserInfo();
    this.formulario = {
      id: null,
      nombre: '',
      email: this.userEmail,
      comentario: ''
    };
  }

  submit(){
    const resp = this.http.realizarPost(Urls.urlJsonSv + 'travel_request',this.formulario).subscribe({
      next: () => {
        console.log("Exito");
      },
      error: () => console.log("Error")
    })
  }

  getUserInfo(){
    const user: Registro = this.authService.getUser();
    this.userEmail = user.email;
  }
}
