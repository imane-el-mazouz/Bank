import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8081/api/transaction';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  transferMoney(fromAccountId: number, toAccountId: number, amount: number, description: string): Observable<string> {
    const body = { fromAccountId, toAccountId, amount, description };
    return this.http.post<string>(`${this.apiUrl}/transfer`, body);
  }

  transferExternally(ribB: number, ribA: number, amount: number, description: string): Observable<string> {
    const body = { ribB, ribA, amount, description };
    return this.http.post<string>(`${this.apiUrl}/extern`, body);
  }
}
