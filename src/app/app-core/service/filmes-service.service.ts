import { Injectable } from '@angular/core';
import Dexie from "dexie";
import {Usuario} from "../model/usuario";
import {Filmes} from "../model/filmes";

@Injectable({
  providedIn: 'root'
})
export class FilmesServiceService extends Dexie{
  usuario: Dexie.Table<Usuario,number>;
  filme: Dexie.Table<Filmes,number>;

  constructor() {
    super('UsuarioDB');
    this.version(1).stores({
      usuario: '++id,nome,email,password',
      filme:'++id,nome,sinopse,imagem'
    });
    this.usuario = this.table('usuario');
    this.filme = this.table('filme');


    this.populafilmes();

  }
  populafilmes(){
    let filme1: Filmes = new Filmes('Oddity',
      'Em Oddity - Objetos Obscuros, quando Dani (Carolyn Bracken) é brutalmente assassinada em uma remota casa ' +
      'de campo que ela e seu marido, Ted (Gwilym Lee), estão reformando, a investigação logo se concentra em um paciente ' +
      'da instituição de saúde mental onde Ted trabalha. Mas, para o horror de todos, o principal suspeito é encontrado morto ' +
      'pouco depois do crime, levando a um mistério ainda mais profundo. Um ano depois, a irmã gêmea de Dani, Darcy (Carolyn Bracken),' +
      ' uma autoproclamada vidente cega e colecionadora de itens amaldiçoados, decide visitar Ted e sua nova namorada, Yana (Caroline Menton). ' +
      'Convencida de que há segredos obscuros por trás do assassinato de sua irmã, Darcy traz consigo os objetos mais perigosos de sua coleção, ' +
      'determinados a descobrir a verdade e a vingar Dani. À medida que Darcy utiliza suas habilidades sobrenaturais e os itens amaldiçoados ' +
      'para investigar, segredos enterrados começam a emergir, revelando uma teia de mentiras, traições e forças ocultas.',

      'assets/imgs/oddity.webp',

      '<iframe width="1346" height="729" src="https://www.youtube.com/embed/Ttzb2uIDkmE"' +
      ' title="Oddity - Objetos Obscuros (2024) | Trailer Legendado" frameborder="0" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
      'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
    this.filme.add(filme1);

    let filme2 = new Filmes('Coringa: Delírio a Dois',
      'Em Coringa 2, acompanhamos a sequência do longa sobre Arthur Fleck (Joaquin Phoenix), que trabalhava como palhaço para uma agência de talentos e precisou lidar desde sempre com seus problemas mentais. ' +
      'Vindo de uma origem familiar complicada, sua personalidade nada convencional o fez ser demitido do emprego, e, numa reação a essa e tantas outras infelicidades em sua vida, ele assumiu uma postura violenta - e se tornou o Coringa. ' +
      'A continuação se passa depois dos acontecimentos do filme de 2019, após ser iniciado um movimento popular contra a elite de Gotham City, revolução esta, que teve o Coringa como seu maior representante. ' +
      'Preso no hospital psiquiátrico de Arkham, ele acaba conhecendo Harleen "Lee" Quinzel (Lady Gaga). A curiosidade mútua acaba se transformando em paixão e obsessão e eles desenvolvem um relacionamento romântico e doentio. Lee e Arthur embarcam em uma desventura alucinada, fervorosa e musical pelo submundo de Gotham City, enquanto o julgamento público  ' +
      'Coringa se desenrola, impactando toda a cidade e suas próprias mentes conturbadas.',
      'assets/imgs/coringa-2.jpg',
      '<iframe width="1296" height="729" src="https://www.youtube.com/embed/sHG2sAi2R-s" title="Coringa: Delírio a Dois | Trailer Oficial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
    this.filme.add(filme2);
    let filme3 = new Filmes('Pecadores',
      'Em Pecadores, Michael B. Jordan interpreta irmãos gêmeos que voltam à sua cidade natal com o objetivo de reconstruir a vida e apagar um passado conturbado. ' +
      'Esses acontecimentos, porém, voltam a atormentá-los quando uma força maligna passa a persegui-los, trazendo para a superfície medos e traumas. ' +
      'Esse mal busca tomar conta da cidade e de todos os cidadãos, obrigando-os a lutar para sobreviver. Mais do que contornar os demônios dominadores e famintos por poder (e sangue), ' +
      'Smoke e Stack (Michael B. Jordan) terão que lidar com as lendas e os mitos ameaçadores que podem estar por trás desse terror. Dirigido por Ryan Coogler (mesmo realizador de Pantera Negra e Creed) numa parceria já consagrada com Michael B. Jordan, ' +
      'Pecadores traz um thriller intenso com elementos sobrenaturais numa história repleta de mistérios.',
      'assets/imgs/pecadores.jpg',
      '<iframe width="1296" height="729" src="https://www.youtube.com/embed/e9kwQahD8YY" title="Pecadores l Trailer Oficial #2 Dublado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
    this.filme.add(filme3);

  }

  async buscarfilmes(): Promise<Filmes[]> {
    return await this.filme.toArray();
  }
}
