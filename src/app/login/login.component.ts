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
  formValue: any;

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

  constructor(private router: Router, private http: HttpClient) { }

  onLogin() {


    console.log("Login button clicked");
    // this.router.navigate(['/dashboard']);
    if (this.LoginForm.valid) {
      this.formValue = this.LoginForm.value;


      this.http.post('http://localhost:8080/login', this.formValue).subscribe(
   response => {
          console.log("Response from server:", response);
          alert("Login successful");
          const isAuthenticated =  true;

          if (isAuthenticated) {
            this.router.navigate(['/layout']);
          }
        },
      error => {
          console.error("Error from server:", error);
          alert("Login failed");
        }
      );
    } else {
      console.log("Form is invalid");
      alert("Please fill out the form correctly.");
    }
  }
}
