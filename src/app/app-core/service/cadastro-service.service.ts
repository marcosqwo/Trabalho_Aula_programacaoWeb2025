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
      filme:'++id,nome,sinopse,imagem,link',
      serie:'++id,nome,sinopse,imagem,link'
    });
    this.usuario = this.table('usuario');
    this.filme = this.table('filme');
    this.serie = this.table('serie');

    const userStorage = localStorage.getItem('usuarioLogado');
    if (userStorage) {
      this.usuariosubject.next(JSON.parse(userStorage));
    }
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

    async buscarUsuarioEmail(usuario:Usuario): Promise<Usuario|undefined> {
    return await this.usuario.where('email').equals(usuario.email).first();
  }


  setUsuarioLogado(usuario: Usuario){
    this.usuariosubject.next(usuario);
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  }


  logoutUsuario() {
    this.usuariosubject.next(null);
    localStorage.removeItem('usuarioLogado');
  }


}




