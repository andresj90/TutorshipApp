import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Home2Component } from './components/home2/home2.component';


const routes: Routes = [
  {path: 'perfil', component: ProfileComponent},
  {path: 'registrar', component: RegistrationComponent},
  {path: 'index', component:Home2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
