import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-pistas',
  templateUrl: './pistas.component.html',
  styleUrls: ['./pistas.component.css']
})
export class PistasComponent implements OnInit{

  launchpads: any;
  landpads: any;
  loading = true;
  constructor(private httpService: HttpService, private http: HttpClient){}

  ngOnInit() {
    this.cargarPistas();
    setTimeout(() => {
    this.loading = false;
    }, 1000);
    
  }

  public async cargarPistas(){
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "launchpads");
      this.launchpads = await lastValueFrom(responseApi);
    } catch (error) {
      console.error(error);
    }
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "landpads");
      this.landpads = await lastValueFrom(responseApi);
    } catch (error) {
      console.error(error);
    }
  }

  
}


