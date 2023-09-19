import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciodesesionComponent } from './iniciodesesion/iniciodesesion.component';
import { PaginadeinicioComponent } from './paginadeinicio/paginadeinicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservaComponent } from './reserva/reserva.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciodesesionComponent,
    PaginadeinicioComponent,
    RegistroComponent,
    ReservaComponent,
    VuelosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
