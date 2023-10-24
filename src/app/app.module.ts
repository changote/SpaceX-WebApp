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
import { LoginComponent } from './modales/login/login.component';
import { PistasComponent } from './paginas/pistas/pistas.component';
import { PistaComponent } from './cards/pista/pista.component';
import { LoadingComponent } from './paginas/loading/loading.component';
import { DetallePistaComponent } from './paginas/detalle-pista/detalle-pista.component';
import { LanzamientosComponent } from './paginas/lanzamientos/lanzamientos.component';
import { FormularioContactoComponent } from './paginas/formulario-contacto/formulario-contacto.component';
import { RegistroComponent } from './modales/registro/registro.component';
import { SidebarComponent } from './paginas/shared/sidebar/sidebar.component';
import { EventosHistoricosComponent } from './paginas/eventos-historicos/eventos-historicos.component';
import { EventoComponent } from './cards/evento/evento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LanzamientoComponent } from './cards/lanzamiento/lanzamiento.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { DetalleLanzamientoComponent } from './paginas/detalle-lanzamiento/detalle-lanzamiento.component';
import { ImagenDialogComponent } from './modales/imagen-dialog/imagen-dialog.component';

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
    LanzamientosComponent,
    FormularioContactoComponent,
    RegistroComponent,
    SidebarComponent,
    EventosHistoricosComponent,
    EventoComponent,
    LanzamientoComponent,
    DetalleLanzamientoComponent,
    ImagenDialogComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    ImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
