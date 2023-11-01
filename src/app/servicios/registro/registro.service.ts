import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Urls } from 'src/app/url-globales';
import { User, Registro } from 'src/app/entidades/model-implements';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpService) { }

  async registroUsuario(data: any){
    const user: User = {
      id: null,
      username: data.username,
      password: data.password
    };
    const registro: Registro = {
      id: null,
      name: data.name,
      password: data.password,
      last_name: data.last_name,
      username: data.username,
      gender: data.gender,
      email: data.email,
      age: data.age
    }
    this.createUser(Urls.urlJsonSv + 'users/', user);
    this.createUser(Urls.urlJsonSv + 'person/', registro);
  }

  public createUser(url: string, user: any) {
    this.http.realizarPost(url, user).subscribe({
      next: () => {
        console.log("Exito");
      },
      error: () => console.log("Error")
    })
  }
}
