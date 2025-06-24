import { Component, OnInit } from '@angular/core';
import {Series} from "../../app-core/model/series";
import {Filmes} from "../../app-core/model/filmes";

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  pecadores: Filmes = {
    id: 1,
    nome: "Pecadores",
    sinopse: "Em Pecadores, Michael B. Jordan interpreta irmãos gêmeos que voltam à sua cidade natal com o objetivo de reconstruir a vida e apagar um passado conturbado. Esses acontecimentos, porém, voltam a atormentá-los " +
      "quando uma força maligna passa a persegui-los, trazendo para a superfície medos e traumas. Esse mal busca tomar conta da cidade e de todos os cidadãos, obrigando-os a lutar para sobreviver. Mais do que contornar os demônios dominadores e famintos por poder (e sangue), Smoke e Stack (Michael B. Jordan)" +
      " terão que lidar com as lendas e os mitos ameaçadores que podem estar por trás desse terror. Dirigido por Ryan Coogler (mesmo realizador de Pantera Negra e Creed) " +
      "numa parceria já consagrada com Michael B. Jordan, Pecadores traz um thriller intenso com elementos sobrenaturais numa história repleta de mistérios."
  }


  constructor() { }

  ngOnInit(): void {
  }

}
