import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    NgForOf,
    CommonModule,
    RouterOutlet
  ],
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.findAll().subscribe((data: Account[]) => {
      this.accounts = data;
    });
  }

  deleteAccount(id: number): void {
    this.accountService.deleteAccount(id).subscribe(() => {
      this.accounts = this.accounts.filter(account => account.idA !== id);
    });
  }
}
