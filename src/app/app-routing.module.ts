import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import {FooterComponent} from "./componentes/footer/footer.component";
import {FilmesComponent} from "./componentes/filmes/filmes.component";
import {HeaderComponent} from "./componentes/header/header.component";
import {SobreComponent} from "./componentes/sobre/sobre.component";
import {SeriesComponent} from "./componentes/series/series.component";
import {CadastroUsuarioComponent} from "./componentes/cadastro-usuario/cadastro-usuario.component";
import {LoginComponent} from "./componentes/login/login.component";
import {EditarusuarioComponent} from "./componentes/editarusuario/editarusuario.component";
import {PlayerFilmesComponent} from "./componentes/player-filmes/player-filmes.component";

const routes: Routes = [
  {path: '',redirectTo:"pagina-inicial",pathMatch:"full"},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'cadastro', component: CadastroUsuarioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editar-usuario', component: EditarusuarioComponent},
  {path: 'assistir-filme/:id', component: PlayerFilmesComponent},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
