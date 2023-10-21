import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent {

  @Input() lanzamiento: any;

  ngOnInit(){
    this.lanzamiento.date_unix = new Date(this.lanzamiento.date_unix * 1000);
    console.log(this.lanzamiento);
    if(this.lanzamiento.links.patch.small == null){
      this.lanzamiento.links.patch.small = "../../../assets/img/parchedaut.png";
    }
  }
}
