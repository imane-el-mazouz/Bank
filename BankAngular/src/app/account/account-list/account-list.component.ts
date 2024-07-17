import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { UserService } from '../../service/user.service';
import {RouterLink} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe
  ],
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserAccounts().subscribe(
      data => this.accounts = data,
      error => console.error('Error fetching accounts:', error)
    );
  }

  // deleteAccount(idA: number): void {
  //   this.userService.deleteAccount(idA).subscribe(() => {
  //     this.accounts = this.accounts.filter(account => account.idA !== idA);
  //   });
  // }
  deleteAccount(idA: any) {

  }
}
