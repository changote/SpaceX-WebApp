import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/servicios/http/http.service';

@Component({
  selector: 'app-capsula-detallado',
  templateUrl: './capsula-detallado.component.html',
  styleUrls: ['./capsula-detallado.component.css']
})
export class CapsulaDetalladoComponent {

  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}
}
