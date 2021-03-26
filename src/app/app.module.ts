import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloCajaComponent } from './views/modulo-caja/modulo-caja.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ModuloLlavesComponent } from './views/modulo-llaves/modulo-llaves.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloCajaComponent,
    NavbarComponent,
    SideBarComponent,
    ModuloLlavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
