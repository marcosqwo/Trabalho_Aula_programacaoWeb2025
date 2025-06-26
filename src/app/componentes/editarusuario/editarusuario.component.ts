import { Component, OnInit } from '@angular/core';
import {CadastroServiceService} from "../../app-core/service/cadastro-service.service";

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
    usuario:any;

  constructor(private cadastroservice: CadastroServiceService) {
    this.cadastroservice.usuariologado$.subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  ngOnInit(): void {
  }

}
