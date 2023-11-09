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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.cargarEventos();
    this.cargarEventoAuto();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    console.log(this.eventos);
  }

  private async cargarEventos() {
    try {
      let apiResponse = this.httpService.realizarGet(Urls.urlApiv4 + "history");
      this.eventos = await lastValueFrom(apiResponse);
    } catch (error) {
      console.log(error);
    }
  }
  private async cargarEventoAuto() {
    try {
      let apiResponse = this.httpService.realizarGet(Urls.urlApiv4 + "roadster");
      this.auto = await lastValueFrom(apiResponse);
      console.log(this.auto);
    } catch (error) {
      console.log(error);
    }
  }
}
