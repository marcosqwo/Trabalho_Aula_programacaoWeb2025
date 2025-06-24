export class Series {
  id: number;
  nome: string;
  sinopse: string;
  imagem?: string;


  constructor(id: number, nome: string, sinopse: string, imagem?: string) {
    this.id = id;
    this.nome = nome;
    this.sinopse = sinopse;
    this.imagem = imagem;
  }
}
