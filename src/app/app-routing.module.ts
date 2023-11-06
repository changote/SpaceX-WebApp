import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { MisDatosComponent } from './paginas/mis-datos/mis-datos.component';
import { DetalleCoheteComponent } from './paginas/detalle-cohete/detalle-cohete.component';
import { Error404Component } from './paginas/error404/error404.component';
import { autenticacionGuard } from './servicios/autenticacion/autenticacion.guard';
import { LoginComponent } from './modales/login/login.component';
import { PistasComponent } from './paginas/pistas/pistas.component';
import { DetallePistaComponent } from './paginas/detalle-pista/detalle-pista.component';
import { LanzamientosComponent } from './paginas/lanzamientos/lanzamientos.component';
import { FormularioContactoComponent } from './paginas/formulario-contacto/formulario-contacto.component';
import { EventosHistoricosComponent } from './paginas/eventos-historicos/eventos-historicos.component';
import { DetalleLanzamientoComponent } from './paginas/detalle-lanzamiento/detalle-lanzamiento.component';
import { InfoNosotrosComponent } from './paginas/info-nosotros/info-nosotros.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mis-datos', component: MisDatosComponent, canMatch:[autenticacionGuard] },
  { path: 'cohete/:id', component: DetalleCoheteComponent },
  { path: 'pista/:id', component: DetallePistaComponent },
  { path: 'lanzamiento/:id', component: DetalleLanzamientoComponent },
  { path: 'lanzamientos', component:  LanzamientosComponent },
  { path: 'pistas', component: PistasComponent },
  { path: 'formulario-contacto', component: FormularioContactoComponent, canMatch: [autenticacionGuard] },
  { path: 'eventos-historicos', component: EventosHistoricosComponent},
  { path: 'info-nosotros', component: InfoNosotrosComponent},
  { path: 'error-404', component: Error404Component},
  { path: '**', redirectTo: 'error-404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
