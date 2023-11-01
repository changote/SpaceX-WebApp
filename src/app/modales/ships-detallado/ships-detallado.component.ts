import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/servicios/http/http.service';

@Component({
  selector: 'app-ships-detallado',
  templateUrl: './ships-detallado.component.html',
  styleUrls: ['./ships-detallado.component.css']
})
export class ShipsDetalladoComponent {
  cores: any = [];
  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}

  ngOnInit(){
    this.getAllCores();
    console.log(this.data);
  }

  private async cargarDataCores(id: string) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "cores/" + id);
      const data = await lastValueFrom(responseApi);
      this.cores.push(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  getAllCores() {
    for(let core of this.data){
      this.cargarDataCores(core);
    }
  }
}
