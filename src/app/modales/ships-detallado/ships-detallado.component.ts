import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-ships-detallado',
  templateUrl: './ships-detallado.component.html',
  styleUrls: ['./ships-detallado.component.css']
})
export class ShipsDetalladoComponent {
  ships: any = [];
  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}

  ngOnInit(){
    this.getAllShips();
    console.log(this.data);
  }

  private async cargarDataShips(id: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "ships/" + id);
      const data = await lastValueFrom(responseApi);
      this.ships.push(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  getAllShips() {
    for(let ship of this.data){
      this.cargarDataShips(ship);
    }
  }
}
