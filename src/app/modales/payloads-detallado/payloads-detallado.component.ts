import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-payloads-detallado',
  templateUrl: './payloads-detallado.component.html',
  styleUrls: ['./payloads-detallado.component.css'],
})
export class PayloadsDetalladoComponent implements AfterViewInit {
  payloads: any = [];
  displayedColumns: string[] = ['name', 'customers', 'type', 'mass_kg', 'orbit'];
  dataSource = new MatTableDataSource<any>([]); // Initialize as MatTableDataSource
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpService: HttpService, @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getAllPayloads();
    this.dataSource.paginator = this.paginator;
  }

  private async cargarDatapayloads(id: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "payloads/" + id);
      const data = await lastValueFrom(responseApi);
      this.payloads.push(data);

      this.dataSource.data = this.payloads;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  getAllPayloads() {
    for (let payload of this.data) {
      this.cargarDatapayloads(payload);
    }
    this.resultsLength = this.payloads.length;
  }

}
