// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginRequest } from '../model/login-request.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Mock method to check if the user is authenticated
  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('authToken');
    return !!token; // Returns true if token exists, false otherwise
  }

  // Mock method for logging in (usually you'd call an API here)
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      sessionStorage.setItem('authToken', 'sampleToken');
      return true;
    }
    return false;
  }

  // Mock method for logging out
  logout() {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['/']); // Navigate to login page after logout
  }

  // Mock authentication check
  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('authToken'); // Check if authToken exists in sessionStorage
  }


}

