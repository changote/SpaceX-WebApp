import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/servicios/http/http.service';

@Component({
  selector: 'app-crew-detallado',
  templateUrl: './crew-detallado.component.html',
  styleUrls: ['./crew-detallado.component.css']
})
export class CrewDetalladoComponent {

  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}
}
