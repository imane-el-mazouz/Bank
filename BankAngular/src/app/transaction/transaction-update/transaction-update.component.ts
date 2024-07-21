import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./transaction-update.component.scss']
})
export class TransactionUpdateComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService) {
    this.transactionForm = this.fb.group({
      id: [null, [Validators.required]],
      fromAccountId: [null, [Validators.required]],
      toAccountId: [null, [Validators.required]],
      amount: [null, [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onUpdate(): void {
    if (this.transactionForm.valid) {
      const { id, fromAccountId, toAccountId, amount, description } = this.transactionForm.value;
      // Implement the update logic here
    }
  }
}
