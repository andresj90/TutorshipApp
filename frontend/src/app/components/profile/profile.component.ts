import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
    this.authService.getUserProfile().subscribe(data => {
      console.log(data);
    }, error => {
      console.log("error " + error);
    });
  }

}
