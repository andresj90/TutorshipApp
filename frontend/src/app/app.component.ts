import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(
   private authService: AuthServiceService
  ) {

  }
  returnStatusUser(): boolean {
    return this.authService.IsLoggedIn();
  }

  ngOnInit(): void {    
    this.authService.getUserProfile().subscribe(data => {
      console.log(data);
     });
  }
}
