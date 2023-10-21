import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/servicios/http/http.service';
import { VariablesGlobales } from 'src/app/variables-globales';

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

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit() {
    this.obtenerId();
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
        setTimeout(() => {
          this.loading = false;
          }, 1000);
      }
    });
  }

  private cargarDatosPista(id: string) {
    this.httpService.realizarGet(VariablesGlobales.urlApi + "landpads/" + id).subscribe(
      (data: any) => {
        this.pista = data;
        if (this.pista.name === undefined) {
          this.error = true;
        }
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  
  private cargarDatosLaunchpad(id: string) {
    this.httpService.realizarGet(VariablesGlobales.urlApi + "launchpads/" + id).subscribe(
      (data: any) => {
        this.pista = data;
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
  
}
