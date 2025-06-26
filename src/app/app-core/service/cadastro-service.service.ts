import { Injectable } from '@angular/core';
import Dexie from "dexie";
import {Usuario} from "../model/usuario";
import {Filmes} from "../model/filmes";
import {Series} from "../model/series";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService extends Dexie{

  usuario: Dexie.Table<Usuario,number>;
  filme: Dexie.Table<Filmes,number>;
  serie: Dexie.Table<Series,number>;

  private usuariosubject =new BehaviorSubject<any|null>(null);

  usuariologado$ =  this.usuariosubject.asObservable();

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

  }
  async adicionarUsuario(usuario:Usuario): Promise<number> {
    return await this.usuario.add(usuario);
  }
  async removerUsuario(id:number): Promise<void> {
    return await this.usuario.delete(id);
  }
  async atualizarUsuario(id:number,usuario:Usuario): Promise<number> {
    return await this.usuario.update(id, usuario);
  }
  async buscarUsuario(): Promise<Usuario[]> {
    return await this.usuario.toArray();
  }
    async buscarUsuarioEmail(usuario:Usuario): Promise<Usuario|undefined> {
    return await this.usuario.where('email').equals(usuario.email).first();
  }


  setUsuarioLogado(usuario: Usuario){
    this.usuariosubject.next(usuario); //o que vir do banco;
    console.log(this.usuariosubject);
  }

  getUsuarioLogado(){
    return this.usuariosubject.getValue();
  }

}




