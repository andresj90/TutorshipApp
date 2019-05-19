import { UserLoguedI } from './../../interfaces/userLogued';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

   
     usuario: string;
     contrasena: string;
     usuarioAuthenticado : UserLoguedI; 

  constructor(
    private authService : AuthServiceService) { }

  ngOnInit() {
  }

  logUser(){
    let user = {
      usuario: this.usuario, 
      contrasena: this.contrasena
    }
    console.log(user)
    this.authService.logUserOnBackend(user).subscribe((data) => {
        this.usuarioAuthenticado = data;
        this.authService.getTokenAndLoggedUser(this.usuarioAuthenticado.usuario.token, this.usuarioAuthenticado.usuario);
        console.log(this.authService.IsLoggedIn());
    });
  }

}
