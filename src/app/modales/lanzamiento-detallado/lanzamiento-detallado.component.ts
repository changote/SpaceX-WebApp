import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lanzamiento } from 'src/app/entidades/model-implements';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';

@Component({
  selector: 'app-lanzamiento-detallado',
  templateUrl: './lanzamiento-detallado.component.html',
  styleUrls: ['./lanzamiento-detallado.component.css']
})
export class LanzamientoDetalladoComponent {
  slides: SlideInterface[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Lanzamiento) { }

  ngOnInit() {
    this.getPhotos();
    if(this.data.success == undefined){
      this.data.success = "Sin informacion";
      this.data.hola = 
    }
    console.log(this.data);
  }

  getPhotos() {
    let i = "foto";
    for (let photo of this.data.photo) {
      let slide: SlideInterface = {
        title: i,
        url: photo
      };
      this.slides.push(slide);
    }
  }

}
