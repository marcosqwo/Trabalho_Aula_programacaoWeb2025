import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../app-core/model/usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CadastroServiceService} from "../../app-core/service/cadastro-service.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(
    private usuarioService: CadastroServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  ngOnInit(): void { }

  login() {
    const usuariologin: Usuario = new Usuario(
      "login",
      this.form.value.email,
      this.form.value.password
    );

    this.usuarioService.buscarUsuarioEmail(usuariologin).then(l => {
      if (usuariologin.password === l?.password){
        if(l){
          this.usuarioService.setUsuarioLogado(l);

          this.router.navigate(['/']);
        }

      }else {
        Swal.fire('Senha Incorreta','digite a senha correta','error' );
      }

    });
  }



  iscampovalido(inputName:string):boolean{
    const campo: any = this.form.get(inputName);
    return campo && campo.touched && campo.invalid;
  }
}
