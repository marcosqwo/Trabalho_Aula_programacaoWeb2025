import { Injectable } from '@angular/core';
import Dexie from "dexie";
import {Usuario} from "../model/usuario";
import {Filmes} from "../model/filmes";

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService extends Dexie{

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


}




