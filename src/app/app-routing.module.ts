import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { MisDatosComponent } from './paginas/mis-datos/mis-datos.component';
import { DetalleCoheteComponent } from './paginas/detalle-cohete/detalle-cohete.component';
import { Error404Component } from './paginas/error404/error404.component';
import { autenticacionGuard } from './servicios/autenticacion/autenticacion.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  { path: 'mis-datos', component: MisDatosComponent, canActivate:[autenticacionGuard]},
  { path: 'cohete/:id', component: DetalleCoheteComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  { path: 'error-404', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
