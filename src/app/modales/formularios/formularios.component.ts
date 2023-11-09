import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['id', 'nombre', 'e-mail', 'estado', 'eliminar'];
  dataSource = new MatTableDataSource<any>([]);
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private http: HttpService) { }

  ngOnInit(): void {
    this.cargarDatosFormularios(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private async cargarDatosFormularios(username: string) {
    try {
      let responseApi = this.http.realizarGet(Urls.urlJsonSv + "travel_request?username=" + username);
      const data = await lastValueFrom(responseApi);
      this.formularios = data;
      this.dataSource.data = this.formularios;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  deleteFormulario(id: number){
    this.http.realizarDelete(Urls.urlJsonSv + "travel_request/", id).subscribe(
      (data => {
        this.cargarDatosFormularios(this.data);
        console.log(data);
      })
    );
  }
}
