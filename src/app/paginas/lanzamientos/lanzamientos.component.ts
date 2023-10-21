import { Component } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { VariablesGlobales } from 'src/app/variables-globales';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent {

  loading = true;
  lanzamientos: any;
  /*
  lanzamientos2006: any;
  lanzamientos2007: any;
  lanzamientos2008: any;
  lanzamientos2009: any;
  lanzamientos2010: any;
  lanzamientos2011: any;
  lanzamientos2012: any;
  lanzamientos2013: any;
  lanzamientos2014: any;
  lanzamientos2015: any;
  lanzamientos2016: any;
  lanzamientos2017: any;
  lanzamientos2018: any;
  lanzamientos2019: any;
  lanzamientos2020: any;
  lanzamientos2021: any;
  lanzamientos2022: any;
  lanzamientos2023: any;
*/



  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.cargarLanzamientos();
    setTimeout(() => {
    this.loading = false;
    }, 2000);}

    private cargarLanzamientos() {
      this.httpService.realizarGet(VariablesGlobales.urlApi + "launches").subscribe(
        (data: any) => {
          this.lanzamientos = data;
          this.filtrarFecha();
          console.log(this.lanzamientos);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }

    private filtrarFecha(){

      for ( let lanzamiento of this.lanzamientos){
        for (let i = 2006; i <= 2021; i++) {
          if (lanzamiento.date_utc.includes(i.toString())) {
            lanzamiento.fecha = i;
            break;
          }
        }
      }
    }
}
