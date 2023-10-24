import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog) {}

  ngOnInit() {
    this.obtenerId();
    console.log(this.landpad);
  }

  private obtenerId(){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.pistaId = id;
        this.cargarDatosPista(this.pistaId);
        if(this.error = true){
          this.cargarDatosLaunchpad(id);
        }
      }
    });
  }

  private cargarDatosPista(id: string) {
    this.httpService.realizarGet(Urls.urlApi + "landpads/" + id).subscribe(
      (data: any) => {
        setTimeout(() => {
        }, 5000);
        this.pista = data;
        console.log(this.pista.name);
        if (this.pista.name === undefined) {
           this.error = true;
        }
        else
         this.loading = false;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  
  private cargarDatosLaunchpad(id: string) {
    this.httpService.realizarGet(Urls.urlApi + "launchpads/" + id).subscribe(
      (data: any) => {
        this.pista = data;
        this.loading = false;
        if(this.pista.status === 'retired'){
          this.pista.status = 'Retirada';
        }
        if(this.pista.status === 'active'){
          this.pista.status = 'Activa';
        }
        if(this.pista.status === 'under construction'){
          this.pista.status = 'En construccion';
        }
        this.landpad = false;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  public maximizarImagen(img: any){
    this.dialog.open(ImagenDialogComponent, {
      data: {
        imagenURL: img
      }
    });
  }

  public volver(){
    window.history.back();
  }
  
}
