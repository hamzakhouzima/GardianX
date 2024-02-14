// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {


    this.username = '';
    this.password = '';

  }

  onSubmit(): void {
    // Call the authentication service's login method
    this.authService.login(this.username, this.password).subscribe(() => {
      // Redirect to home page upon successful login
      this.router.navigate(['/']);
    }, error => {
      // Handle login error (display error message, etc.)
      console.error('Login failed:', error);
    });
  }
}
