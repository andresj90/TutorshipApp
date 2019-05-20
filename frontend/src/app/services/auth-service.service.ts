import { UserLoguedI } from './../interfaces/userLogued';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { userI } from '../interfaces/user';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';


// const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http: HttpClient,
    private jwt: JwtModule,
    private jwtHelper: JwtHelperService
  ) { }

  userToken: any;
  usuarioLogueado: Object;


  registerUser(user): Observable<userI> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<userI>('http://localhost:3000/usuarios/registrarse', user, { headers: headers });
  }

  logUserOnBackend(user): Observable<UserLoguedI> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<UserLoguedI>('http://localhost:3000/usuarios/login', user, { headers: headers });
  }

  getUserProfile() {
    let headers = new HttpHeaders();
    this.loadTokenStored();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'JWT ' + this.userToken);
    return this.http.get('http://localhost:3000/usuarios/perfil', { headers: headers })
  }

  getTokenAndLoggedUser(token, user) {
    localStorage.setItem('access_token', token);
    localStorage.setItem(user, JSON.stringify(user));
    this.userToken = token;
    this.usuarioLogueado = user;
  }

  LogUserOut() {
    this.userToken = null;
    this.usuarioLogueado = null;
    localStorage.clear();
  }

  IsLoggedIn() {
    let token = tokenGetter();
    return this.jwtHelper.isTokenExpired(token);
  }

  loadTokenStored() {
    this.userToken = localStorage.getItem('access_token');
  }
}
