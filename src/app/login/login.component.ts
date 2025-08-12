import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginRequest } from '../model/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {

  }
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/admin/dashboard']); // Redirect to dashboard on success
      console.log("Login success", success);

    } else {
      this.loginFailed = true; // Show an error message
      console.log("Can't login", success);

    }

  }



}