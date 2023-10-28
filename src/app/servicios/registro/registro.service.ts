import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Urls } from 'src/app/url-globales';
import { Registro } from 'src/app/entidades/registro';
import { User } from 'src/app/entidades/user';
import { RegistroCompleto } from 'src/app/entidades/registroCompleto';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpService) { }

  registroUsuario(data: RegistroCompleto){
    const user: User = {
      username: data.username,
      password: data.password
    };
    const registro: Registro = {
      name: data.name,
      last_name: data.last_name,
      username: data.username,
      gender: data.gender,
      email: data.email,
      age: data.age
    }
    this.http.realizarPost(Urls.urlJsonSvUsers, user).subscribe((respuesta: any) => {
      console.log('Data added to "person" resource:', respuesta.data);
    })
    this.http.realizarPost(Urls.urlJsonSvUserData, registro).subscribe((respuesta: any) => {
      console.log('Data added to "person" resource:', respuesta.data);
    })
  }
}
