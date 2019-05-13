import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public authService : AuthService,
    private router : Router) { }
   
  ngOnInit() {
  }
   
  signUserOut() {
    this.authService.LogUserOut();
    this.router.navigate(['/login']);
  }


}
