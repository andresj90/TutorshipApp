import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
   
   usuarioLogueado =  {
    Nombre: String, 
    Email: String, 
    Codigo: String, 
    Programa: String, 
    Rol: String
   }
   
  constructor(
    private authService : AuthService 
  ) { }

  ngOnInit() {
    this.authService.getUserProfile().subscribe(data => {
     this.usuarioLogueado = data.usuarioLogueado;
    }, (err) => {
      console.log('err');
    } )
    
  }

}
