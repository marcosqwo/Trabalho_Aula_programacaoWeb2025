export class Filmes {

  id?: number;
  nome: string;
  sinopse: string;
  imagem: string;
  link: string;
  linktrailer: string;

  constructor(nome: string, sinopse: string, imagem: string, link : string, linktrailer:string, id?: number) {
    this.id = id;
    this.nome = nome;
    this.sinopse = sinopse;
    this.link = link;
    this.imagem = imagem;
    this.linktrailer = linktrailer;
  }

}
