import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { Transaction } from '../../model/transaction';
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    NgForOf
  ],
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe(
      (transactions) => this.transactions = transactions,
      (error) => console.error('Error loading transactions', error)
    );
  }
}
