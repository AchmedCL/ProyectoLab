import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { ModuloAvisosComponent } from './views/modulo-avisos/modulo-avisos.component';
import { ModuloCajaComponent } from './views/modulo-caja/modulo-caja.component';
import { ModuloDocumentosComponent } from './views/modulo-documentos/modulo-documentos.component';
import { ModuloHorariosComponent } from './views/modulo-horarios/modulo-horarios.component';
import { ModuloLlavesComponent } from './views/modulo-llaves/modulo-llaves.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  {path : 'Inicio', component: InicioComponent},

  {
    path: 'moduloAvisos',
    component: ModuloAvisosComponent,
  },
  {
    path: 'moduloCaja',
    component: ModuloCajaComponent,
  },

  {
    path: 'moduloDocumentos',
    component: ModuloDocumentosComponent,
  },
  {
    path: 'moduloHorarios',
    component: ModuloHorariosComponent,
  },
  {
    path: 'moduloLlaves',
    component: ModuloLlavesComponent,
  },
  {path: '**', redirectTo: '/Inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
