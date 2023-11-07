import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Formulario } from 'src/app/entidades/model-implements';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit{
  formularios: Formulario[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private http: HttpService) { }
  ngOnInit(): void {
    this.cargarDatosFormularios(this.data);
  }

  private async cargarDatosFormularios(email: string) {
    try {
      let responseApi = this.http.realizarGet(Urls.urlJsonSv + "travel_request?email=" + email);
      const data = await lastValueFrom(responseApi);
      this.formularios = data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
