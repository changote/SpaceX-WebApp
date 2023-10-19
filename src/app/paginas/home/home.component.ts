import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';
import { TranslationService } from 'src/app/servicios/translation/translation.service';
import { VariablesGlobales } from 'src/app/variables-globales';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  company: any;
  loading = true;
  translatedText: any;

  constructor(private httpService: HttpService, private translationService: TranslationService){
    
  }
  ngOnInit() {
    this.httpService.realizarGet(VariablesGlobales.urlApi + "company").subscribe(
      (data: any) => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        this.company = data;
        this.translatedText = this.translate(data.summary);
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
