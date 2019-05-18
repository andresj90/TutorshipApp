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

  usuario : userI;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthServiceService,
    private validateService: ValidateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getTestRoute().subscribe(data => {
      this.usuario = data; 
      console.log(this.usuario.email)
    })
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

    console.log(usuario);

    if (!this.validateService.validateStudentCode(usuario.codigo)) {
      // this.flashMessage.show("El código estudiantil debe ser 9 digitos", { cssClass: 'alert-danger', timeout: 3000 });
      console.log("El código estudiantil debe ser 9 digitos");
    } else {
      this.authService.registerUser(usuario).subscribe(data => {
        console.log("usuario :"  + data )
      })
    }
  }

}
