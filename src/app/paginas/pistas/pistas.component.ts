import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { VariablesGlobales } from 'src/app/variables-globales';

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
  private cargarPistas() {
    this.httpService.realizarGet(VariablesGlobales.urlApi + "launchpads").subscribe(
      (data: any) => {
        this.launchpads = data;
        console.log(this.launchpads);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
    this.httpService.realizarGet(VariablesGlobales.urlApi + "landpads").subscribe(
      (data: any) => {
        this.landpads = data;
        console.log(this.landpads);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}


