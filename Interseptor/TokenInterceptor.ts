import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Get the JWT token from local storage
    const token = localStorage.getItem('token');
    // Clone the request and add the JWT token to the Authorization header
    if (token) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('token is not null')
      return next.handle(clonedReq);
    } else {
      // If no token, proceed with the original request
      console.log('token is  null')

      return next.handle(req);
    }
  }
}
