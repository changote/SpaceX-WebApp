import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-detalle-lanzamiento',
  templateUrl: './detalle-lanzamiento.component.html',
  styleUrls: ['./detalle-lanzamiento.component.css']
})
export class DetalleLanzamientoComponent {
  loading = true;
  lanzamiento: any;
  lanzamientoId: any;
  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit() {
    this.obtenerId();
  }

  private obtenerId(){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.lanzamientoId = id;
        this.cargarDatosLauncher(this.lanzamientoId);
        setTimeout(() => {
          this.loading = false;
          }, 1000);
      }
    });
  }
  
  private async cargarDatosLauncher(id: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv5 + "launches/" + id);
      this.lanzamiento = await lastValueFrom(responseApi);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  public volver(){
    window.history.back();
  }
}
