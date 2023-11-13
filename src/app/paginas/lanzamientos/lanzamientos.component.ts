import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent {
  selectedYear: number = 2022;
  loading = true;
  lanzamientos: any;
  years: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.cargarLanzamientos();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    this.getYears();
  }

  private async cargarLanzamientos(){
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv5 + "launches");
      this.lanzamientos = await lastValueFrom(responseApi);
      this.filtrarFecha();
    } catch (error) {
      console.error(error);
    }
  }

  private filtrarFecha() {

    for (let lanzamiento of this.lanzamientos) {
      for (let i = 2006; i <= 2022; i++) {
        if (lanzamiento.date_utc.includes(i.toString())) {
          lanzamiento.fecha = i;
          break;
        }
      }
    }
  }

  getYears(){
    const startYear = 2006;
    const endYear = 2022;

    for (let year = startYear; year <= endYear; year++) {
      this.years.push(year);
    }
  }
}
