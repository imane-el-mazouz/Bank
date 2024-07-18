// import {Component, OnInit} from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Account } from '../../model/account';
// import { UserService } from '../../service/user.service';
// import { AccountService } from '../../service/account.service';
// import { CommonModule } from '@angular/common';
// import { RouterModule , RouterOutlet , RouterLink} from '@angular/router';
// import {NgForOf} from "@angular/common";
//
// import { Observable } from 'rxjs';
//
//
// @Component({
//   selector: 'app-account-list',
//   templateUrl: './account-list.component.html',
//   styleUrls: ['./account-list.component.scss'],
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     RouterOutlet,
//     RouterLink,
//     NgForOf
//   ]
// })
// export class AccountListComponent implements OnInit {
//   accounts: Account[] = [];
//
//   constructor(private userService: UserService) { }
//
//   ngOnInit(): void {
//     this.userService.getUserAccounts().subscribe(
//       data => this.accounts = data,
//       error => console.error('Error fetching accounts:', error)
//     );
//   }
//
//
//   deleteAccount(idA: number) {
//
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    NgForOf
  ]
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(
      data => this.accounts = data,
      error => console.error('Error fetching accounts:', error)
    );
  }

  deleteAccount(idA: number): void {
  }
}
