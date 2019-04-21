import { Component, OnInit } from '@angular/core';
import { ValidarService } from 'app/services/validar.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  username: string;
  lastname: string;
  codigo: string;
  password: string;
  email: string;
  carrera = [];
  
  constructor(
    private validarService : ValidarService
    
  ) { }
   
  ngOnInit() {
    
  }

}
