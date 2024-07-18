import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/user-auth-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    NgForOf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private http: HttpClient) { }

  login(username: string, password: string): void {
    this.http.post<{ token: string }>('http://localhost:8081/api/auth/login', { username, password })
      .subscribe(response => {
        this.authService.setToken(response.token);
      });
  }
}
