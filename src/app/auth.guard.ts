import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = true;

    if (isAuthenticated) {
      return true; 
    } else {
      // Redirect to the login page
      this.router.navigate(['/login']);
      return false; 
    }
  }
}
