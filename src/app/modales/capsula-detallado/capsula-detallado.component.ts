import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-capsula-detallado',
  templateUrl: './capsula-detallado.component.html',
  styleUrls: ['./capsula-detallado.component.css']
})
export class CapsulaDetalladoComponent implements AfterViewInit {
  capsulas: any = [];
  displayedColumns: string[] = ['nro-serie', 'status', 'type', 'last-update', 'nro-aterrizaje', 'nro-acuatizajes', 'reutilizaciones'];
  dataSource = new MatTableDataSource<any>([]); // Initialize as MatTableDataSource
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllCapsulas();
    this.dataSource.paginator = this.paginator;
  }

  private async cargarDatacapsulas(id: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "capsules/" + id);
      const data = await lastValueFrom(responseApi);
      this.capsulas.push(data); 

      this.dataSource.data = this.capsulas;
    } catch (error) {
      console.error('Error:', error);
  }
}

  getAllCapsulas() {
    for(let capsula of this.data){
      this.cargarDatacapsulas(capsula);
    }
    this.resultsLength = this.capsulas.length;
  }
}
