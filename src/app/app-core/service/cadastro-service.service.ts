import { Injectable } from '@angular/core';
import Dexie from "dexie";
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService extends Dexie{

  usuario: Dexie.Table<Usuario,number>;




  constructor() {
    super('UsuarioDB');
    this.version(1).stores({
      usuario: '++id,nome,email,password,'
    });
    this.usuario = this.table('usuario');
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




