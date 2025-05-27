import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import {FooterComponent} from "./componentes/footer/footer.component";
import {FilmesComponent} from "./componentes/filmes/filmes.component";
import {HeaderComponent} from "./componentes/header/header.component";

const routes: Routes = [
  {path: '',redirectTo:"pagina-inicial",pathMatch:"full"},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'header', component: HeaderComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
