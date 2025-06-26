import { Component, OnInit } from '@angular/core';
import {CadastroServiceService} from "../../app-core/service/cadastro-service.service";
import {FilmesServiceService} from "../../app-core/service/filmes-service.service";
import {Filmes} from "../../app-core/model/filmes";
import {Series} from "../../app-core/model/series";
import {SerieserviceService} from "../../app-core/service/serieservice.service";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

  declare var $: any;
@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})

export class PaginaInicialComponent implements OnInit {
  listafilmes:Filmes[]=[];
  listaseries:Series[]=[];
  filmesvisualizar:any;
  safeIframe: SafeHtml = '';
  private sanitizer: any;
  serievisualizar:any;


  constructor(filmesService: FilmesServiceService , serieservice : SerieserviceService, sanitizer: DomSanitizer) {
    filmesService.buscarfilmes().then(filmes => {
      this.listafilmes = filmes;
    });
    serieservice.buscarseries().then(series => {
      this.listaseries = series;
    });
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {

  }
  openModalFilmes() {
      $('#visualizar-filme').modal('show');
  }
  openModalSeries() {
    $('#visualizar-serie').modal('show');
  }
  closeModalFilmes() {
    $('#visualizar-filme').modal('hide');
  }
  closeModalSerie() {
    $('#visualizar-serie').modal('hide');
  }
  setFilmeAtual(t:Filmes){
    this.filmesvisualizar=t;
    this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(t.link);
  }
  setSerieAtual(t:Series){
    this.serievisualizar=t;
    this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(t.link);
  }

}
