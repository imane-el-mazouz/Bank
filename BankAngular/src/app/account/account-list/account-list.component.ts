import { Component } from '@angular/core';
import {Account} from "../../model/account";
import {AccountService} from "../../service/account.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent {
     accounts : Account[] = [];

     constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    this.accountService.findAll().subscribe((data: Account[]) => {
      this.accounts = data;
    });
  }


  deleteAccount(idA: number) : void {
       this.accountService.deleteAccount(idA , account).subscribe( () => {
         this.accounts.filter(account => account.idA !== idA);
       })
  }
}

