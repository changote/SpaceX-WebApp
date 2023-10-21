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

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.cargarLanzamientos();
    setTimeout(() => {
    this.loading = false;
    }, 2000);}

    private cargarLanzamientos() {
      this.httpService.realizarGet(VariablesGlobales.urlApi + "history").subscribe(
        (data: any) => {
          this.lanzamientos = data;
          console.log(this.lanzamientos);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
}
