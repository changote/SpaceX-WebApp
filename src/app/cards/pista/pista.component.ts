import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pista',
  templateUrl: './pista.component.html',
  styleUrls: ['./pista.component.css']
})
export class PistaComponent {

@Input() pista: any;


}
