import { Component, OnInit } from '@angular/core';
import {CadastroServiceService} from "../../app-core/service/cadastro-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogado: any | null = null;

  constructor(private cadastroService: CadastroServiceService) { }

  ngOnInit(): void {

    this.cadastroService.usuariologado$.subscribe(usuario => {
      this.usuarioLogado = usuario;
    })

  }

}
