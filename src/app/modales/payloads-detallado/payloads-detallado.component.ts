import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-payloads-detallado',
  templateUrl: './payloads-detallado.component.html',
  styleUrls: ['./payloads-detallado.component.css']
})
export class PayloadsDetalladoComponent {
  payloads: any = [];
  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}

  ngOnInit(){
    this.getAllPayloads();
    console.log(this.data);
  }

  private async cargarDatapayloads(id: string) {
    try {
      console.log(id);
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "payloads/" + id);
      const data = await lastValueFrom(responseApi);
      console.log(data);
      this.payloads.push(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  getAllPayloads() {
    for(let payload of this.data){
      this.cargarDatapayloads(payload);
    }
  }
}
