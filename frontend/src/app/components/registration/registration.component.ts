import { browser } from 'protractor';
import { ValidateService } from './../../services/validate.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { userI } from 'src/app/interfaces/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  careras = ['Ingenieria de sistemas', 'Ingenieria industrial', 'Matematicas', 'Psicologia', 'Mercadeo',
    'Negocios Internacionales', 'Posgrado'];
  nombre: string;
  apellido: string;
  codigo: string;
  email: string;
  contrasena: string;
  programa: string;

  usuario: userI;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthServiceService,
    private validateService: ValidateService,
    private router: Router
  ) { }

  ngOnInit() {

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
      this.flashMessage.show("Formato de correo incorrecto", { cssClass: 'alert-danger', timeout: 5000 });
    } else {
      this.authService.registerUser(usuario).subscribe(data => {
        this.usuario = data;
        if (this.usuario.codigo) {
          this.flashMessage.show(this.usuario.msg, { cssClass: 'alert-danger', timeout: 5000 });
        } else if (this.usuario.email) {
          this.flashMessage.show(this.usuario.msg, { cssClass: 'alert-danger', timeout: 5000 });
        } else {
          this.flashMessage.show(this.usuario.msg, { cssClass: 'alert-success', timeout: 5000 });
        }
      })
    }
  }

}
