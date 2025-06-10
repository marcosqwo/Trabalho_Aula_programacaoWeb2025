export class Usuario {

  id?: number;
  nome: string;
  email: string;
  password: string;

  constructor( nome: string, email: string, password: string, id?: number,) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.password = password;
  }



}
