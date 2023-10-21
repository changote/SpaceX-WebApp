import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  @Input() event: any;

  ngOnInit(){
    this.event.event_date_unix = new Date(this.event.event_date_unix * 1000);

    this.ponerImagen();
  }

  ponerImagen(){
    if (this.event.title.includes('Falcon')){
      this.event.imagen = "../../../assets/img/Falcon.jpg";
    } else if (this.event.title.includes('Dragon')){
      this.event.imagen = "../../../assets/img/Dragon.jpeg";
    } else if (this.event.title.includes('ISS')){
      this.event.imagen = "../../../assets/img/Iss.jpg";
    } else if (this.event.title.includes('recovered')){
      this.event.imagen = "../../../assets/img/recovered.jpg";
    } else if (this.event.title.includes('Raptor')){
      this.event.imagen = "../../../assets/img/Raptor.jpg";
    }
    
  }
}