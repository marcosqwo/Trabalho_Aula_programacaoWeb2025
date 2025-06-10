import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../app-core/model/usuario';
import {CadastroServiceService} from "../../app-core/service/cadastro-service.service"; // ajuste conforme o caminho

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario[] = [];
  form: FormGroup;

  constructor(
    private tarefaService: CadastroServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      id: [0],
    });
  }

  ngOnInit(): void { }

  submitForm() {
    if (this.form.value.id > 0) {
      this.editarTarefa();
    } else {
      this.salvarUsuario();
    }
  }

  salvarUsuario(): void {
    if (this.form.valid) {
      const novoUsuario: Usuario = new Usuario(
        this.form.value.nome,
        this.form.value.email,
        this.form.value.password
      );

      this.tarefaService.adicionarUsuario(novoUsuario).then(resposta => {
        if (resposta > 0) {
          Swal.fire('Sucesso!', 'Usuário(a) salvo(a) com sucesso!', 'success').then(() => {
            this.form.reset();
            this.router.navigate(['/']);
          });
        }
      }).catch(respostaErro => {
        Swal.fire('Erro!', 'Não foi possível salvar o usuário. Tente novamente mais tarde.', 'error');
        console.log(respostaErro);
      });

    } else {
      console.log("Campos inválidos encontrados");
      Swal.fire("Atenção!", "Alguns campos do formulário não estão corretos.", 'warning');
      this.marcartodoscomoclicados();
    }
  }

  editarTarefa() {

  }

  marcartodoscomoclicados() {
    Object.keys(this.form.controls).forEach(campo => {
      this.form.get(campo)?.markAsTouched();
    });
  }


  iscampovalido(inputName:string):boolean{
    const campo: any = this.form.get(inputName);
    return campo && campo.touched && campo.invalid;
  }
}



