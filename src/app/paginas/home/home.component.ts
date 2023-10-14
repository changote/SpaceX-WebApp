import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  company: any;
  constructor(private httpService: HttpService){
    
  }
  ngOnInit() {
    this.httpService.realizarGet("https://api.spacexdata.com/v4/company").subscribe(
      (data: any) => {
        this.company = data;
        console.log(this.company);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
