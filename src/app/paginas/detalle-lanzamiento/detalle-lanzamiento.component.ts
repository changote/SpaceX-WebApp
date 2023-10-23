import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/servicios/http/http.service';
import { VariablesGlobales } from 'src/app/variables-globales';

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

  private cargarDatosLauncher(id: string) {
    this.httpService.realizarGet(VariablesGlobales.urlApiv5 + "launches/" + id).subscribe(
      (data: any) => {
        this.lanzamiento = data;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  // private cargarDatosPayloads(id: string) {
  //   this.httpService.realizarGet(VariablesGlobales.urlApiv5 + "payloads/" + id).subscribe(
  //     (data: any) => {
  //       this. = data;
  //     },
  //     (error: any) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  // private cargarDatosLauncher(id: string) {
  //   this.httpService.realizarGet(VariablesGlobales.urlApiv5 + "launches/" + id).subscribe(
  //     (data: any) => {
  //       this.lanzamiento = data;
  //     },
  //     (error: any) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
}
