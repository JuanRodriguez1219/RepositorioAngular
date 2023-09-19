import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginadeinicioComponent } from './paginadeinicio/paginadeinicio.component';
import { IniciodesesionComponent } from './iniciodesesion/iniciodesesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservaComponent } from './reserva/reserva.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'iniciodesesion',component:IniciodesesionComponent},
  {path:'paginadeinicio',component:PaginadeinicioComponent},
  {path:'registro',component:RegistroComponent},
  {path:'reserva',component:ReservaComponent},
  {path:'vuelos',component:VuelosComponent},
  {path:'contacto',component:ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
