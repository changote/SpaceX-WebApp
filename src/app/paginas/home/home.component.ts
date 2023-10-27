import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { TranslationService } from 'src/app/servicios/translation/translation.service';
import { Urls } from 'src/app/url-globales';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  company: any;
  loading = true;
  translatedText: any;

  slides: SlideInterface[] = [
    { url: "../../../assets/img/slider-1.jpg", title: '1' },
    { url: "../../../assets/img/slider-2.jpg", title: '2' },
    { url: "../../../assets/img/slider-3.jpg", title: '3' },
    { url: "../../../assets/img/slider-4.jpg", title: '4' },
    { url: "../../../assets/img/slider-5.jpg", title: '5' },
    { url: "../../../assets/img/slider-6.jpg", title: '6' }
  ];

  constructor(private httpService: HttpService, private translationService: TranslationService){
    
  }
  ngOnInit() {
    this.httpService.realizarGet(Urls.urlApi + "company").subscribe(
      (data: any) => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
        this.company = data;
        console.log(this.company);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
    
  }
  async translate(textToTranslate: string) {
    const targetLanguage = "en";

    this.translationService.translateText(textToTranslate, targetLanguage)
      .subscribe((data) => {
        this.translatedText = data.translatedText;
        console.log(this.translatedText);
      });
  }

  
}
