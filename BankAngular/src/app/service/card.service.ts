import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Card } from '../model/card';
import {Account} from "../model/account";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:8081/api/cards';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  getCardById(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  saveCard(card: Card): Observable<Card> {
    console.log('Saving card:', card);
    return this.http.post<Card>(this.apiUrl, card, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }



  updateCard(id: number, card: Card): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, card, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }
  updateCardStatus(id: number, updatedCard: { status: string, blockingReason?: string }): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<void>(`${this.apiUrl}/${id}/status`, updatedCard, { headers })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong, please try again later.'));
  }
}
