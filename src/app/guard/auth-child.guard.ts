import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardChild implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Allow access to child routes if the user is logged in
    } else {
      this.router.navigate(['/']); // Redirect to the login page if not logged in
      return false; // Prevent access to child routes
    }
  }
}
