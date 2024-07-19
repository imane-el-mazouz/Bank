import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AccountService } from '../../service/account.service';
import { Account } from '../../model/account';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf} from "@angular/common";

enum TypeA {
  CurrentAccount = 'currentAccount',
  SavingAccount = 'savingAccount'
}

enum Bank {
  CIH = 'cih',
  BMCE = 'bmce',
  AttijariWafaBank = 'AttijariWafaBank',
  MaghrebBank = 'MaghrebBank'
}

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  accountForm: FormGroup;
  typeAEnum = TypeA;
  bankEnum = Bank;
  val: TypeA = TypeA.CurrentAccount;
  bank: Bank = Bank.CIH;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.accountForm = this.fb.group({
      typeA: ['', Validators.required],
      sold: ['', [Validators.required, Validators.min(0)]],
      rib: ['', Validators.required],
      date: ['', Validators.required],
      bank: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      const account: Account = this.accountForm.value;
      this.accountService.saveAccount(account).subscribe({
        next: (response) => {
          console.log('Account saved successfully', response);
          this.router.navigate(['/accounts']);
        },
        error: (error) => {
          console.error('There was an error saving the account', error);
          this.router.navigate(['/accounts']);
        }
      });
    }
  }

  toggleAccountType(): void {
    this.val = this.val === TypeA.CurrentAccount ? TypeA.SavingAccount : TypeA.CurrentAccount;
  }

  toggleBank(): void {
    this.bank = this.bank === Bank.CIH ? Bank.BMCE : this.bank === Bank.BMCE ? Bank.AttijariWafaBank : this.bank === Bank.AttijariWafaBank ? Bank.MaghrebBank : Bank.CIH;
  }

  protected readonly Object = Object;
}
