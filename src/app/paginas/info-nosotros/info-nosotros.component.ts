import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-nosotros',
  templateUrl: './info-nosotros.component.html',
  styleUrls: ['./info-nosotros.component.css']
})
export class InfoNosotrosComponent implements OnInit{
  loading: boolean = true;

  ngOnInit(){
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
