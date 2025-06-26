import { Component, OnInit } from '@angular/core';
import {Filmes} from "../../app-core/model/filmes";
import {FilmesServiceService} from "../../app-core/service/filmes-service.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

 declare var $: any;
@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  listafilmes:Filmes[]=[];
  safeIframe: SafeHtml = '';
  private sanitizer: any;
  filmesvisualizar:any;


  constructor(filmesService: FilmesServiceService,sanitizer: DomSanitizer) {
    filmesService.buscarfilmes().then(filmes => {
      this.listafilmes = filmes;
    });
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {
  }
  openModalFilmes() {
    $('#visualizar-filme').modal('show');
  }
  closeModalFilmes() {
    $('#visualizar-filme').modal('hide');
  }
  setFilmeAtual(t:Filmes){
    this.filmesvisualizar=t;
    this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(t.link);
  }

}
