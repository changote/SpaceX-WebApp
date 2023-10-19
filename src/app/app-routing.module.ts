import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { MisDatosComponent } from './paginas/mis-datos/mis-datos.component';
import { DetalleCoheteComponent } from './paginas/detalle-cohete/detalle-cohete.component';
import { Error404Component } from './paginas/error404/error404.component';
import { autenticacionGuard } from './servicios/autenticacion/autenticacion.guard';
import { LoginComponent } from './paginas/login/login.component';
import { PistasComponent } from './paginas/pistas/pistas.component';
import { DetallePistaComponent } from './paginas/detalle-pista/detalle-pista.component';

const routes: Routes = [
  { path: '', component: HomeComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  { path: 'mis-datos', component: MisDatosComponent, canActivate:[autenticacionGuard]},
  { path: 'cohete/:id', component: DetalleCoheteComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  { path: 'pista/:id', component: DetallePistaComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  { path: 'login', component: LoginComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  { path: 'pistas', component: PistasComponent},
  { path: 'error-404', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
