import { Component, OnInit } from '@angular/core';
import { ValidarService } from 'app/services/validar.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user';
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  nombre: string;
  apellido: string;
  codigo: string;
  email: string;
  contrasena: string;
  programa: string;

  submitted = false;
 
  onSubmit() { this.submitted = true; }

  model = new User(this.nombre, this.apellido, this.codigo, this.email, this.contrasena, this.programa);
  registrar: FormGroup;

  
  constructor(
    private validarService : ValidarService ,
    private flashMessage: FlashMessagesService,
    private auth: AuthService   
  ) { }
   
  ngOnInit() : void {
      this.registrar = new FormGroup({
        'nombre' : new FormControl(
          this.model.nombre,
          Validators.required
        ),
        'apellido' : new FormControl(
          this.model.apellido,
          Validators.required
        ),
        'codigo' : new FormControl(
          this.model.codigo,
          Validators.required
        ),'email' : new FormControl(
          this.model.email,
          Validators.required
        ),'contrasena' : new FormControl(
          this.model.contrasena,
          Validators.required
        ),'programa' : new FormControl(
          this.model.nombre,
          Validators.required
        )
      })
  }

  RegisterClick(){
    if(!this.validarService.validateRegister(this.model)){
      this.flashMessage.show('alguno de los campos esta vacio', {cssClass: 'alert-danger', timeout: 3000});
    }this.auth.registerUser(this.model).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('registrado correctamente', {cssClas: 'alert-success', timeout: 3000});
      }
    });
  }

}
