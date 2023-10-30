import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ImagenDialogComponent } from 'src/app/modales/imagen-dialog/imagen-dialog.component';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-detalle-pista',
  templateUrl: './detalle-pista.component.html',
  styleUrls: ['./detalle-pista.component.css']
})
export class DetallePistaComponent implements OnInit {
  pistaId: any;
  pista: any;
  loading = true;
  landpad = true;
  error = false;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog) { }

  ngOnInit() {
    this.obtenerId();
  }

  private async obtenerId() {
    this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if (id) {
        this.pistaId = id;
        await this.cargarDatosPista(this.pistaId); // Espera hasta que se complete cargarDatosPista

        if (this.error) {
          await this.cargarDatosLaunchpad(id); // Espera hasta que se complete cargarDatosLaunchpad
        }

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    });
  }


  private async cargarDatosLaunchpad(id: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApi + "launchpads/" + id);
      this.pista = await lastValueFrom(responseApi);
      this.setStatus();
      this.landpad = false;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  private async cargarDatosPista(id: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApi + "landpads/" + id);
      this.pista = await lastValueFrom(responseApi);
      this.setStatus();
    } catch (error: any) {
      this.error = true;
      console.log("error 2" + this.error);
    }
  }
  private setStatus() {
    if (this.pista.status === 'retired') {
      this.pista.status = 'Retirada';
    }
    if (this.pista.status === 'active') {
      this.pista.status = 'Activa';
    }
    if (this.pista.status === 'under construction') {
      this.pista.status = 'En construccion';
    }
  }

  public maximizarImagen() {
    if (this.pista && this.pista.images && this.pista.images.large && this.pista.images.large.length > 0) {
      const imgURL = this.pista.images.large[0];
      this.dialog.open(ImagenDialogComponent, {
        data: {
          imagenURL: imgURL
        }
      });
    } else {
      console.error('No se pudo encontrar la imagen.');
    }
  }

  public volver() {
    window.history.back();
  }

}
