import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService) {
    this.transactionForm = this.fb.group({
      fromAccountId: [null, [Validators.required]],
      toAccountId: [null, [Validators.required]],
      amount: [null, [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const { fromAccountId, toAccountId, amount, description } = this.transactionForm.value;
      this.transactionService.transferMoney(fromAccountId, toAccountId, amount, description).subscribe(
        response => console.log(response),
        error => console.error('Error transferring money', error)
      );
    }
  }
}
