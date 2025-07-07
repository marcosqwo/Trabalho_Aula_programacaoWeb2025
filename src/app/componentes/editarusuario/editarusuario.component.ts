import { Component, OnInit } from '@angular/core';
import {CadastroServiceService} from "../../app-core/service/cadastro-service.service";
import {Usuario} from "../../app-core/model/usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
    usuario:any;
    form: FormGroup;

  constructor(private usuarioService: CadastroServiceService,
              private fb: FormBuilder,
              private router: Router) {


        this.form = this.fb.group({
          nome: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          passwordrepeat: ['', Validators.required],
          id: [0],
          }, { validators: this.checkPasswords });


    this.usuarioService.usuariologado$.subscribe(usuario => {
      this.usuario = usuario;
      if (usuario) {
        this.form.patchValue({
          nome: usuario.nome,
          email: usuario.email,
          password: usuario.password,
          id: usuario.id
        });
      }
    });



  }

  ngOnInit(): void {
  }

  submitForm() {
    this.editarTarefa();
  }
  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('passwordrepeat')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  editarTarefa(){
    if (this.form.valid) {
      const editarUsuario :Usuario = new Usuario(
        this.form.value.nome,
        this.form.value.email,
        this.form.value.password
      );
      this.usuarioService.atualizarUsuario(this.form.value.id,editarUsuario).then(
        resposta => {
          if (resposta === 1) {
            Swal.fire('Sucesso!', 'Usuário Editado com sucesso!', 'success');
            this.usuarioService.setUsuarioLogado(editarUsuario);
            this.form.reset();
            this.router.navigate(['/pagina-inicial']);
          }else {
            Swal.fire('Atenção',
              'Nenhum Usuário encontrado(a) ou'+
              'nenhuma alteração realizada',
              'info');


          }
        }
      ).catch(error => {
        Swal.fire('Cuidado!',
          'Não foi possível editar o Usuário',
          'error');
      });

    }else {
      Swal.fire('Cuidado!',
        'Alguns campos estão incorretos',
        'warning');
      this.marcartodoscomoclicados();
    }
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

  excluirUsuario() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Essa ação irá excluir permanentemente sua conta.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const id = this.form.value.id;
        this.usuarioService.removerUsuario(id).then(() => {
          Swal.fire('Excluído!', 'Sua conta foi excluída com sucesso.', 'success');
          this.usuarioService.logoutUsuario();
          this.router.navigate(['/pagina-inicial']);
        }).catch(() => {
          Swal.fire('Erro', 'Ocorreu um erro ao excluir a conta.', 'error');
        });
      }
    });
  }

}
