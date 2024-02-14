import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {map, Observable} from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard   {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          console.log("authenticated");
          // alert('f')

          // this.router.navigate(['/home']);
          return true;
        } else {
          console.log("not authenticated");
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }


}

