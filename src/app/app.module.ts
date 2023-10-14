import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './paginas/error404/error404.component';
import { MisDatosComponent } from './paginas/mis-datos/mis-datos.component';
import { HomeComponent } from './paginas/home/home.component';
import { DetalleCoheteComponent } from './paginas/detalle-cohete/detalle-cohete.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    MisDatosComponent,
    HomeComponent,
    DetalleCoheteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
