import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../model/account";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/api/account';

  constructor(private http: HttpClient) { }


  findAll(): Observable<Account []> {
    return this.http.get<Account[]>(`${this.apiUrl}/all`);
  }

  deleteAccount(idA: number, account: Account) {

  }
}
