import { Component } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { VariablesGlobales } from 'src/app/variables-globales';

@Component({
  selector: 'app-eventos-historicos',
  templateUrl: './eventos-historicos.component.html',
  styleUrls: ['./eventos-historicos.component.css'],
})
export class EventosHistoricosComponent {
  loading = true;
  eventos: any;
  auto: any;

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.cargarEventos();
    this.cargarEventoAuto();
    setTimeout(() => {
    this.loading = false;
    }, 2000);}

    private cargarEventos() {
      this.httpService.realizarGet(VariablesGlobales.urlApi + "history").subscribe(
        (data: any) => {
          this.eventos = data;
          console.log(this.eventos);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }

    private cargarEventoAuto(){
      this.httpService.realizarGet(VariablesGlobales.urlApi + "roadster").subscribe(
        (data: any) => {
          this.auto = data;
          console.log(this.auto);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
}
