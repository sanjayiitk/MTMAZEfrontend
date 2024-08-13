import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Define an interface for the user data structure
interface UserData {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNo: string;
  presentAddressId: number;
  permanentAddressId: number;
  role: string;
}

// Define an interface for the login response structure
interface LoginResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: UserData;
}

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
    email: new FormControl('', [Validators.required, Validators.email]),
    // Form control for password with required and minimum length validation
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  // Constructor to inject dependencies
  constructor(private router: Router, private http: HttpClient) { }

  // Method to handle login action
  onLogin(): void {
    console.log('Login button clicked');

    // Check if the form is valid before making the HTTP request
    if (this.LoginForm.valid) {
      // Retrieve the form values
      this.formValue = this.LoginForm.value;

      // Make a POST request to the login endpoint with form values
      this.http.post<LoginResponse>('http://localhost:8080/login', this.formValue).subscribe(
        (response: LoginResponse) => {
          // Log the response from the server
          console.log('Response from server:', response);

          // Check if the login was successful
          if (response.success) {
            // Extract user data from the response
            const userData: UserData = response.data;
            // Generate the username from the user data
            const username: string = this.generateUsername(userData);

             // Store the username in localStorage
             localStorage.setItem('username', username);

            // Log the username of the logged-in user
            console.log('Logged in user:', username);

            // Display a success message
            alert('Login successful');

            // Navigate to a different route if authenticated
            this.router.navigate(['/layout']);
          } else {
            // Display a failure message if login was not successful
            alert('Login failed');
          }
        },
        (error: any) => {
          // Log the error from the server
          console.error('Error from server:', error);
          // Display a failure message in case of an error
          alert('Login failed');
        }
      );
    } else {
      // Log a message if the form is invalid
      console.log('Form is invalid');
      // Display a message prompting the user to correct the form
      alert('Please fill out the form correctly.');
    }
  }

  // Helper method to generate the username of the user
  private generateUsername(user: UserData): string {
    // Combine the first name, middle initial (if present), and last name to create a username
    return `${user.firstName}${user.middleName ? '.' + user.middleName[0] + '.' : ''}${user.lastName}`;
  }
}
