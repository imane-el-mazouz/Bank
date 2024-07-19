import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Beneficiary } from '../model/beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  private apiUrl = 'http://localhost:8081/api/benef';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  saveBenef(beneficiary: Beneficiary): Observable<Beneficiary> {
    return this.http.post<Beneficiary>(`${this.apiUrl}`, beneficiary, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }
 getBeneficiaries(): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>(`${this.apiUrl}/beneficiaries`, { headers: this.getHeaders() })
     .pipe(catchError(this.handleError));
  }


  // deleteAccount(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }
  //
  // getAccount(id: number): Observable<Account> {
  //   return this.http.get<Account>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }
  //
  // updateAccount(id: number, account: Account): Observable<Account> {
  //   return this.http.put<Account>(`${this.apiUrl}/update/${id}`, account, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }
  //
  // // closeAccount(id: number, account: Account): Observable<Account> {
  // //   return this.http.put<Account>(`${this.apiUrl}/close/${id}`, account, { headers: this.getHeaders() })
  // //     .pipe(catchError(this.handleError));
  // // }
  //
  // closeAccount(id: number, accountCloseData: { closureReason: string }): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/close/${id}`, accountCloseData, { headers: this.getHeaders() })
  //     .pipe(catchError(this.handleError));
  // }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong, please try again later.'));
  }
}
