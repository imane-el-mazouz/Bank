import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {User} from "../../model/user";

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

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getUserAccounts().subscribe(
      data => this.accounts = data,
      error => console.error('Error fetching accounts:', error)
    );
  }

  deleteAccount(idA: number): void {
      this.accountService.deleteAccount(idA).subscribe(() => {
        this.accounts = this.accounts.filter(account => account.idA !== idA);
    })
  }


  updateAccount(idA : number, account :Account) : void {
    this.accountService.updateAccount(idA , account).subscribe(() =>{
      console.log('Account updated successfully');
    });
  }


  closeAccount(idA: number): void {
    const reason = prompt('Enter the reason for closing this account:');
    if (reason) {
      this.accountService.closeAccount(idA, { closureReason: reason }).subscribe(
        () => {
          console.log('Account closed successfully');
        },
        error => console.error('Error closing account:', error)
      );
    }
  }
}
