import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

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

    // private cargarEventos() {
    //   this.httpService.realizarGet(Urls.urlApi + "history").subscribe(
    //     (data: any) => {
    //       this.eventos = data;
    //       console.log(this.eventos);
    //     },
    //     (error: any) => {
    //       console.error('Error:', error);
    //     }
    //   );
    // }
    private async cargarEventos() {
      try{
        let apiResponse = this.httpService.realizarGet(Urls.urlApi + "history");
        this.eventos = await lastValueFrom(apiResponse);
      }catch(error){
        console.log(error);
      }
    }
    private async cargarEventoAuto() {
      try{
        let apiResponse = this.httpService.realizarGet(Urls.urlApi + "roadster");
        this.auto = await lastValueFrom(apiResponse);
      }catch(error){
        console.log(error);
      }
    }
}
