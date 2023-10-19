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
        setTimeout(() => {
          this.loading = false;
          }, 2000);
      }
    });
  }

  private cargarDatosPista(id: string) {
    this.httpService.realizarGet(VariablesGlobales.urlApi + "landpads/" + id).subscribe(
      (data: any) => {
        this.pista = data;
        if (this.pista.name === undefined) {
          this.cargarDatosLaunchpad(id);
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
        this.landpad = false;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  
}
