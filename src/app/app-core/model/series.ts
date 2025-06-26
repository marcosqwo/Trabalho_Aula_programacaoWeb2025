export class Series {
  id?: number;
  nome: string;
  sinopse: string;
  link: string;
  imagem: string;


  constructor( nome: string, sinopse: string, imagem: string , link:string , id?: number ) {
    this.id = id;
    this.nome = nome;
    this.sinopse = sinopse;
    this.imagem = imagem;
    this.link=  link;
  }
}
