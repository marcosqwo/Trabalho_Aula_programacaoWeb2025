import { Component, OnInit } from '@angular/core';
import {CadastroServiceService} from "../../app-core/service/cadastro-service.service";
import {FilmesServiceService} from "../../app-core/service/filmes-service.service";
import {Filmes} from "../../app-core/model/filmes";
  declare var $: any;
@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})

export class PaginaInicialComponent implements OnInit {
  listafilmes:Filmes[]=[];


  constructor(cadastraService: CadastroServiceService,filmesService: FilmesServiceService) {
    filmesService.buscarfilmes().then(filmes => {
      this.listafilmes = filmes;
    });
  }

  ngOnInit(): void {

  }
  openModal() {
    $('#visualizar-filme').modal('show');
  }
  closeModal() {
    $('#visualizar-filme').modal('hide');
  }

}
