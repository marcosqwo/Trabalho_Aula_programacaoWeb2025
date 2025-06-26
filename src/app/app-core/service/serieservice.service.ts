import { Injectable } from '@angular/core';
import Dexie from "dexie";
import {Usuario} from "../model/usuario";
import {Filmes} from "../model/filmes";
import {Series} from "../model/series";

@Injectable({
  providedIn: 'root'
})
export class SerieserviceService extends Dexie{

  usuario: Dexie.Table<Usuario,number>;
  filme: Dexie.Table<Filmes,number>;
  serie: Dexie.Table<Series,number>;

  constructor() {
    super('UsuarioDB');
    this.version(1).stores({
      usuario: '++id,nome,email,password',
      filme:'++id,nome,sinopse,imagem',
      serie:'++id,nome,sinopse,imagem'
    });
    this.usuario = this.table('usuario');
    this.filme = this.table('filme');
    this.serie = this.table('serie');


    this.populaseries();

  }
  populaseries(){
    this.serie.clear();
    let serie1: Series = new Series('Breaking Bad','Walter White (Bryan Cranston) é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler (Anna Gunn), sua esposa grávida, e Walt Junior (RJ Mitte), ' +
      'seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida fica ainda mais complicada quando descobre que está sofrendo de um câncer de pulmão incurável. Para aumentar rapidamente a quantidade de dinheiro que deixaria para sua família após sua morte, Walter usa seu ' +
      'conhecimento de química para fazer e vender metanfetamina, uma droga sintética. Ele conta com a ajuda do ex-aluno e pequeno traficante Jesse (Aaron Paul) e enfrenta vários desafios, incluindo o fato de seu ' +
      'concunhado ser um importante nome dentro da Agência Anti-Drogas da região.', 'assets/imgs/brakingbad.webp','<iframe height="400px" width="100%" src="https://www.youtube.com/embed/HhesaQXLuRY" title="Breaking Bad Trailer (First Season)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' );
    this.serie.add(serie1);





  }

  async buscarseries(): Promise<Series[]> {
    return await this.serie.toArray();
  }
}
