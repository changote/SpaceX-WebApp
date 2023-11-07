import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';

@Component({
  selector: 'app-crew-detallado',
  templateUrl: './crew-detallado.component.html',
  styleUrls: ['./crew-detallado.component.css']
})
export class CrewDetalladoComponent implements OnInit{
  crew: any[] = [];
  tieneCrew: boolean = true;
  constructor(private httpService: HttpService,@Inject(MAT_DIALOG_DATA) public data: string[]){}

  ngOnInit(){
    this.getAllCrewMembers();
    console.log(this.crew);
  }

  private async cargarDataCrew(id: any) {
    try {
      let responseApi = this.httpService.realizarGet(Urls.urlApiv4 + "crew/" + id);
      console.log(id);
      const data = await lastValueFrom(responseApi);
      console.log(data);
      this.crew.push(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  getAllCrewMembers() {
    for(let member of this.data){
      this.cargarDataCrew(member);
    }
    if(this.crew.length == 0){
      this.tieneCrew = false;
    }
  }
}
