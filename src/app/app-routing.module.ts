import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {path: '',redirectTo:"pagina-inicial",pathMatch:"full"},
  {path: 'pagina-inicial', component: PaginaInicialComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
