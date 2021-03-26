import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloCajaComponent } from './views/modulo-caja/modulo-caja.component';

const routes: Routes = [
  {
    path: 'moduloCaja',
    component: ModuloCajaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
