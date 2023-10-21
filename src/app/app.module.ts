import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './paginas/error404/error404.component';
import { MisDatosComponent } from './paginas/mis-datos/mis-datos.component';
import { HomeComponent } from './paginas/home/home.component';
import { DetalleCoheteComponent } from './paginas/detalle-cohete/detalle-cohete.component';
import { HeaderComponent } from './paginas/shared/header/header.component';
import { FooterComponent } from './paginas/shared/footer/footer.component';
import { CoheteComponent } from './cards/cohete/cohete.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './paginas/login/login.component';
import { PistasComponent } from './paginas/pistas/pistas.component';
import { PistaComponent } from './cards/pista/pista.component';
import { LoadingComponent } from './paginas/loading/loading.component';
import { DetallePistaComponent } from './paginas/detalle-pista/detalle-pista.component';
import { LanzamientosComponent } from './paginas/lanzamientos/lanzamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    MisDatosComponent,
    HomeComponent,
    DetalleCoheteComponent,
    HeaderComponent,
    FooterComponent,
    CoheteComponent,
    LoginComponent,
    PistasComponent,
    PistaComponent,
    LoadingComponent,
    DetallePistaComponent,
    LanzamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
