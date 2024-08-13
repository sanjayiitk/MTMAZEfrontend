import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class HeaderComponent implements OnInit {
  // Property to store the username retrieved from localStorage
  username: string | null = null;

  // Constructor to inject Router service for navigation and PLATFORM_ID for platform detection
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to determine platform
  ) { }

  // On component initialization, retrieve the username from localStorage if running in a browser
  ngOnInit(): void {
    // Check if the code is running in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      try {
        // Fetch the username from localStorage
        this.username = localStorage.getItem('username');
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
    }
  }

  // Method to handle user logout
  logout(): void {
    // Check if the code is running in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      try {
        // Remove the username from localStorage to clear user session
        localStorage.removeItem('username');
      } catch (error) {
        console.error('Error removing item from localStorage:', error);
      }
    }

    // Navigate to the login page after logout
    this.router.navigate(['/login']);
  }
}
