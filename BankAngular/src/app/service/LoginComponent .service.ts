// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService, private http: HttpClient) { }

  login(username: string, password: string): void {
    this.http.post<{ token: string }>('http://localhost:8081/api/auth/login', { username, password })
      .subscribe(response => {
        this.authService.setToken(response.token);
        // Redirect to another page or update UI
      });
  }
}
