import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent {

  @Input() lanzamiento: any;

}
