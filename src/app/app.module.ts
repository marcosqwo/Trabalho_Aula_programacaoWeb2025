import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { CadastroUsuarioComponent } from './componentes/cadastro-usuario/cadastro-usuario.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { SeriesComponent } from './componentes/series/series.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './componentes/login/login.component';
import { EditarusuarioComponent } from './componentes/editarusuario/editarusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    HeaderComponent,
    FooterComponent,
    FilmesComponent,
    CadastroUsuarioComponent,
    SobreComponent,
    SeriesComponent,
    LoginComponent,
    EditarusuarioComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
