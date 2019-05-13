import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from "angular2-jwt";


@Injectable()
export class AuthService {

  userToken : any; 
  usuarioLogueado: Object;

  constructor(
    private http : Http
  ) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/usuarios/registrarse',user, {headers: headers}).map(res => res.json());
  }

  logUserOnBackend(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/usuarios/login',user, {headers: headers}).map(res => res.json());
  }

  getUserProfile(){
    let headers = new Headers();
    this.loadTokenStored();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.userToken);
    return this.http.get('http://localhost:3000/usuarios/perfil',{headers: headers}).map(res => res.json());
  }

  getTokenAndLoggedUser(token, user)
  {
    localStorage.setItem('id_token', token);
    localStorage.setItem(user, JSON.stringify(user));
    this.userToken = token; 
    this.usuarioLogueado = user;
  }

  LogUserOut(){
    this.userToken = null; 
    this.usuarioLogueado = null;
    localStorage.clear();
  }

  IsLoggedIn(){
    return tokenNotExpired('id_token');
  }

  loadTokenStored(){
    this.userToken = localStorage.getItem('id_token');

}
