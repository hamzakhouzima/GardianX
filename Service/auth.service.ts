import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8080/super'; // Your backend API URL
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // Method to check if user is authenticated
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Method to perform user login
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        // Assuming backend returns JWT token upon successful login
        const token = response.token;
        if (token) {
          // Store token in local storage
          localStorage.setItem('token', token);
          // Update authentication status
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  // Method to perform user logout
  logout(): void {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Update authentication status
    this.isAuthenticatedSubject.next(false);
  }
}
