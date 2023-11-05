import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';
import { lastValueFrom } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Core } from 'src/app/entidades/model-implements';

@Component({
  selector: 'app-core-detallado',
  templateUrl: './core-detallado.component.html',
  styleUrls: ['./core-detallado.component.css']
})
export class CoreDetalladoComponent implements AfterViewInit{
  cores: Core[] = [];
  displayedColumns: string[] = ['name', 'status', 'reuses', 'last-update', '%-aterrizajes-exitosos'];
  dataSource = new MatTableDataSource<any>([]); // Initialize as MatTableDataSource
  resultsLength = 0;
  aterrizajes = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllCores();
    console.log(this.data);
    this.dataSource.paginator = this.paginator;
  }

  private async cargarDatacore(id: string) {
    try {
      console.log(id);
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "cores/" + id);
      const data:Core = await lastValueFrom(responseApi);
      console.log(data);
      data.po
      this.cores.push(data); 

      this.dataSource.data = this.cores;
    } catch (error) {
      console.error('Error:', error);
  }
}

  getAllCores() {
    for(let capsula of this.data){
      this.cargarDatacore(capsula);
    }
    this.resultsLength = this.cores.length;
  }


}
