import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8082/api/user';


  constructor(private http : HttpClient) { }

  findAll() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  save(user : User) : Observable<void> {
    return this.http.post<User>(this.apiUrl , user)
  }
}
