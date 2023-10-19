import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pista',
  templateUrl: './detalle-pista.component.html',
  styleUrls: ['./detalle-pista.component.css']
})
export class DetallePistaComponent implements OnInit {
  @Input() pista: any;

  constructor() {}

  ngOnInit() {
    // Puedes acceder a los datos de la pista aquí
    console.log(this.pista);
  }
}
