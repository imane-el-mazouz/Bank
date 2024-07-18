// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {Account} from "../model/account";
// import { User } from '../model/user';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {
//   private apiUrl = 'http://localhost:8081/api/account';
//
//   constructor(private http: HttpClient) {}
//
//   getAllAccounts(): Observable<Account[]> {
//     const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
//     return this.http.get<Account[]>(`${this.apiUrl}/all`, { headers });
//   }
//
//   private getToken(): string {
//     return 'your-jwt-token';
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8081/api/account';

  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<Account[]>(`${this.apiUrl}/all`, { headers });
  }

  private getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
