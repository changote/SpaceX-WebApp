import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Lanzamiento } from 'src/app/entidades/model-implements';
import { CapsulaDetalladoComponent } from 'src/app/modales/capsula-detallado/capsula-detallado.component';
import { CoreDetalladoComponent } from 'src/app/modales/core-detallado/core-detallado.component';
import { CrewDetalladoComponent } from 'src/app/modales/crew-detallado/crew-detallado.component';
import { LanzamientoDetalladoComponent } from 'src/app/modales/lanzamiento-detallado/lanzamiento-detallado.component';
import { PayloadsDetalladoComponent } from 'src/app/modales/payloads-detallado/payloads-detallado.component';
import { ShipsDetalladoComponent } from 'src/app/modales/ships-detallado/ships-detallado.component';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-detalle-lanzamiento',
  templateUrl: './detalle-lanzamiento.component.html',
  styleUrls: ['./detalle-lanzamiento.component.css']
})
export class DetalleLanzamientoComponent {
  loading = true;
  lanzamiento: Lanzamiento = new Lanzamiento();
  lanzamientoId: any;
  constructor(private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog) {}

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
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "launches/" + id);
      const data = await lastValueFrom(responseApi);
      this.lanzamiento = new Lanzamiento(data);
      for (let i = 0; i < this.lanzamiento.cores.length; i++) {
        const core = this.lanzamiento.cores[i];
        this.lanzamiento.cores[i] = core.core;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  public volver(){
    window.history.back();
  }

  modalCore(){
    this.dialog.open(CoreDetalladoComponent, {
      data: this.lanzamiento.cores,
      height: 'auto',
      width: 'auto',
    });
  }
  modalPayload(){
    this.dialog.open(PayloadsDetalladoComponent, {
      data: this.lanzamiento.payloads,
      height: 'auto',
      width: 'auto',
    });
  }
  modalLanzamiento(){
    this.dialog.open(LanzamientoDetalladoComponent, {
      data: this.lanzamiento,
      height: 'auto',
      width: 'auto',
    });
  }
  modalCapsula(){
    this.dialog.open(CapsulaDetalladoComponent, {
      data: this.lanzamiento.capsules,
      height: 'auto',
      width: 'auto',
    });
  }
  modalShips(){
    this.dialog.open(ShipsDetalladoComponent, {
      data: this.lanzamiento.ships,
      height: 'auto',
      width: 'auto',
    });
  }
  modalCrew(){
    this.dialog.open(CrewDetalladoComponent, {
      data: this.lanzamiento.crew,
      height: 'auto',
      width: 'auto',
    });
  }

  iluminarBarco() {
    const barco = document.getElementById('barco_xA0_Imagen');
    barco!.style.filter = 'brightness(150%)'; // Cambia el brillo para iluminar el barco
  }

  restaurarBarco() {
    const barco = document.getElementById('barco_xA0_Imagen_1_');
    barco!.style.filter = 'brightness(100%)'; // Restaura el brillo original del barco
  }
}
