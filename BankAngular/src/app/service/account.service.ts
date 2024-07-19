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
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getUserAccounts(): Observable<Account[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Account[]>(`${this.apiUrl}/accounts`, { headers });
  }

  saveAccount(account: Account): Observable<Account> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<Account>(`${this.apiUrl}/save`, account, { headers });
  }



  deleteAccount(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  getAccount(id: number): Observable<Account> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Account>(`${this.apiUrl}/${id}`, { headers });
  }

  updateAccount(id: number, account: Account): Observable<Account> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Account>(`${this.apiUrl}/${id}`, account, { headers });
  }
}
