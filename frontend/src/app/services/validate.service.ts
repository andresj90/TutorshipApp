import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateUserFields(user) {
    if (user.nombre == undefined || user.apellido == undefined || user.codigo == undefined
      || user.email == undefined || user.password || user.programa) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email));
    return re.test(email);
  }

  validateStudentCode(codigo) {
    if (!/[Aa-zZ]/.test(codigo) && codigo.length != 9) {
      return false;
    } else {
      return true;
    }
  }
}
