import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Allow navigation if the user is logged in
    } else {
      this.router.navigate(['/']); // Redirect to login page if not authenticated
      return false; // Block navigation
    }
  }
}
