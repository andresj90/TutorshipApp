import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from  '@angular/common/http';
import { ValidateService } from './services/validate.service';
import { AuthServiceService } from './services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    ValidateService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
