import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { tokenNotExpired } from "angular2-jwt";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { userI } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

  userToken : any; 
  usuarioLogueado: Object;


  registerUser(user): Observable<userI>{
    let headers = new HttpHeaders ();
    headers.append('Content-Type', 'application/json');
    return this.http.post<userI>('http://localhost:3000/usuarios/registrarse',user, {headers: headers});
  }

  logUserOnBackend(user) {
    let headers = new HttpHeaders ();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/usuarios/login',user, {headers: headers});
  }

  getUserProfile(){
    let headers = new HttpHeaders ();
    this.loadTokenStored();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.userToken);
    return this.http.get('http://localhost:3000/usuarios/perfil',{headers: headers})
  }

  getTokenAndLoggedUser(token, user)
  {
    localStorage.setItem('id_token', token);
    localStorage.setItem(user, JSON.stringify(user));
    this.userToken = token; 
    this.usuarioLogueado = user;
  }

  getTestRoute(): Observable<userI> {
    return this.http.get<userI>('http://localhost:3000/tutorias/prueba');
  }

  LogUserOut(){
    this.userToken = null; 
    this.usuarioLogueado = null;
    localStorage.clear();
  }

  // IsLoggedIn(){
  //   return tokenNotExpired('id_token');
  // }

  loadTokenStored(){
    this.userToken = localStorage.getItem('id_token');
  }
}
