import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ValidarService } from "../../services/validar.service";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario :String;
  contrasena : String; 
   
  constructor(
    private authService: AuthService,
    private validateService: ValidarService,
    private flashMessage: FlashMessagesService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  loguearUserOnSystem(){
      let usuarioDigitado = {
        usuario: this.usuario, 
        contrasena: this.contrasena
      }
    
       this.authService.logUserOnBackend(usuarioDigitado).subscribe(data => {
         if(!data.success){
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 10000});
         }else{
          this.flashMessage.show("Usuario logueado exitosamente", {cssClass: 'alert-success', timeout: 10000});
          this.authService.getTokenAndLoggedUser(data.usuario.token, data.usuario);
          this.router.navigate(['/perfil']);
         }
       })

  }

}
