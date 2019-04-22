import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ValidarService } from "../../services/validar.service";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  careras = ['Ingenieria de sistemas', 'Ingenieria industrial', 'Matematicas'];
  nombre: string;
  apellido: string;
  codigo: string;
  email: string;
  contrasena: string;
  programa: string;



  constructor(
    private authService: AuthService,
    private validateService: ValidarService,
    private flashMessage: FlashMessagesService,
    private router : Router
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
  
    console.log(usuario); 

    if (!this.validateService.validateStudentCode(usuario.codigo)) {
      this.flashMessage.show("El código estudiantil debe ser 9 digitos" , {cssClass: 'alert-danger', timeout: 3000});
    } else {
      this.authService.registerUser(usuario).subscribe((data) => {
         if(!data.codigo){
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 10000});
         }else if (!data.email) {
          this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 10000});
         }else if(!data.success){
          this.flashMessage.show("El usuario no pude ser registrado" , {cssClass: 'alert-danger', timeout: 10000});
          this.router.navigate(['/registrarse']);
        }else {
          this.flashMessage.show("El usuario fue registrado" , {cssClass: 'alert-success', timeout: 10000});
          this.router.navigate(['/login']);
         }
      })
    }
  }



}
