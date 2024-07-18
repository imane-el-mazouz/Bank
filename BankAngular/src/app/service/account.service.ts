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
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8081/api/account';

  constructor(private http: HttpClient) {}

  getUserAccounts(): Observable<Account[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Account[]>(`${this.apiUrl}/accounts`, { headers });
  }

  saveAccount(account: Account): Observable<Account> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Account>(this.apiUrl, account, { headers });
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }

  updateAccount(id: number, account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.apiUrl}/${id}`, account);
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Account } from '../model/account';
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
//     return localStorage.getItem('token') || '';
//   }
// }
