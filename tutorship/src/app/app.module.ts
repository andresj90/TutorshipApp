import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';


//services

import { ValidarService } from 'app/services/validar.service';

const APP_ROUTES : Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"registrar", component: RegistrarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ValidarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
