import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lanzamiento } from 'src/app/entidades/model-implements';
import { HttpService } from 'src/app/servicios/http/http.service';

@Component({
  selector: 'app-lanzamiento-detallado',
  templateUrl: './lanzamiento-detallado.component.html',
  styleUrls: ['./lanzamiento-detallado.component.css']
})
export class LanzamientoDetalladoComponent {
  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: Lanzamiento){}

  ngOnInit(){
    console.log(this.data);
  }
}
