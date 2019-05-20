import { UserLoguedI } from './../../interfaces/userLogued';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { userI } from 'src/app/interfaces/user';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  usuario: string;
  contrasena: string;
  usuarioAuthenticado: UserLoguedI;
  careras = ['Ingenieria de sistemas', 'Ingenieria industrial', 'Matematicas', 'Psicologia', 'Mercadeo',
    'Negocios Internacionales', 'Posgrado'];
  nombre: string;
  apellido: string;
  codigo: string;
  email: string;
  programa: string;
  usuarioCandidato: userI;

  constructor(
    private authService: AuthServiceService,
    private router: Router, 
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService
    ) { }



  ngOnInit() {
  }

  logUser() {
    let user = {
      usuario: this.usuario,
      contrasena: this.contrasena
    }
    this.authService.logUserOnBackend(user).subscribe((data) => {
      this.usuarioAuthenticado = data;
      console.log(this.usuarioAuthenticado)
      this.authService.getTokenAndLoggedUser(this.usuarioAuthenticado.usuario.token, this.usuarioAuthenticado.usuario);
      console.log(this.authService.IsLoggedIn());
      this.router.navigate['perfil'];
    });
  }


  registerNewUser() {
    const usuario = {
      nombre: this.nombre.trim(),
      apellido: this.apellido.trim(),
      codigo: this.codigo.trim(),
      email: this.email.trim(),
      contrasena: this.contrasena.trim(),
      programa: this.programa
    }
    if (!this.validateService.validateEmail(usuario.email)) {
      window.alert('Formato de correo incorrecto');
    } else {
      this.authService.registerUser(usuario).subscribe(data => {
        this.usuarioCandidato = data;
        if (this.usuarioCandidato.codigo) {
         window.alert('this.usuarioCandidato.msg');
        } else if (this.usuarioCandidato.email) {
          window.alert(this.usuarioCandidato.msg);
        } else {
          window.confirm(this.usuarioCandidato.msg);
          location.reload();
        }
      })
    }
  }

}