import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { Urls } from 'src/app/url-globales';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  company: any;
  loading = true;

  slides: SlideInterface[] = [
    { url: "../../../assets/img/slider-1.jpg", title: '1' },
    { url: "../../../assets/img/slider-2.jpg", title: '2' },
    { url: "../../../assets/img/slider-3.jpg", title: '3' },
    { url: "../../../assets/img/slider-4.jpg", title: '4' },
    { url: "../../../assets/img/slider-5.jpg", title: '5' },
    { url: "../../../assets/img/slider-6.jpg", title: '6' }
  ];

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.traerDatosCompania();
  }

  public async traerDatosCompania() {
    try{
      let apiResponse =  this.httpService.realizarGet(Urls.urlApiv4 + "company");
      this.company = await lastValueFrom(apiResponse);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }catch(error){
      console.log(error);
    }
  }

  
}
