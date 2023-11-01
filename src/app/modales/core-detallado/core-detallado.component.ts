import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';
import { lastValueFrom } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-core-detallado',
  templateUrl: './core-detallado.component.html',
  styleUrls: ['./core-detallado.component.css']
})
export class CoreDetalladoComponent implements OnInit{
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
