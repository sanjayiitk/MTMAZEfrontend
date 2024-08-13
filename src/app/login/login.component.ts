import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { error } from 'node:console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Property to store the form values
  formValue: any;

  // Definition of the form group with controls and validation rules
  LoginForm: FormGroup = new FormGroup({
    // Form control for email with required and email format validation
    email: new FormControl("", [Validators.required, Validators.email]),
    // Form control for password with required and minimum length validation
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

  // Constructor to inject dependencies
  constructor(private router: Router, private http: HttpClient) { }

  // Method to handle login action
  onLogin() {

    // Log message indicating the login button was clicked
    console.log("Login button clicked");

    // Check if the form is valid before making the HTTP request
    if (this.LoginForm.valid) {
      // Retrieve the form values
      this.formValue = this.LoginForm.value;

      // Make a POST request to the login endpoint with form values
      this.http.post('http://localhost:8080/login', this.formValue).subscribe(
        response => {
          // Log the response from the server
          console.log("Response from server:", response);
          // Display a success message
          alert("Login successful");
          // Example of authentication check (hardcoded for demonstration)
          const isAuthenticated = true;

          // Navigate to a different route if authenticated
          if (isAuthenticated) {
            this.router.navigate(['/layout']);
          }
        },
        error => {
          // Log the error from the server
          console.error("Error from server:", error);
          // Display a failure message
          alert("Login failed");
        }
      );
    } else {
      // Log message if the form is invalid
      console.log("Form is invalid");
      // Display a message prompting user to correct the form
      alert("Please fill out the form correctly.");
    }
  }
}
