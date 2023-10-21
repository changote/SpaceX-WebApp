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
  }

}
