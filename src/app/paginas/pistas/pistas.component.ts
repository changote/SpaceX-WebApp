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
  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.cargarPistas();
    setTimeout(() => {
    this.loading = false;
    }, 1000);
    
  }
  // private cargarPistas() {
  //   this.httpService.realizarGet(Urls.urlApi + "launchpads").subscribe(
  //     (data: any) => {
  //       this.launchpads = data;
  //       console.log(this.launchpads);
  //     },
  //     (error: any) => {
  //       console.error('Error:', error);
  //     }
  //   );
  //   this.httpService.realizarGet(Urls.urlApi + "landpads").subscribe(
  //     (data: any) => {
  //       this.landpads = data;
  //       console.log(this.landpads);
  //     },
  //     (error: any) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
  public async cargarPistas(){
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApi + "launchpads");
      this.launchpads = await lastValueFrom(responseApi);

    } catch (error) {
      console.error(error);
    }
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApi + "landpads");
      this.landpads = await lastValueFrom(responseApi);

    } catch (error) {
      console.error(error);
    }
  }
}


