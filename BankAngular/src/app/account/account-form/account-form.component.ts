import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent {
  accountForm: FormGroup;
  typeAEnum = TypeA;
  bankEnum = Bank;
  val: TypeA = TypeA.CurrentAccount;
  bank: Bank = Bank.CIH;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      typeA: ['', Validators.required],
      sold: ['', [Validators.required, Validators.min(0)]],
      rib: ['', Validators.required],
      date: ['', Validators.required],
      bank: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
    }
  }

  toggleAccountType() {
    this.val = this.val === TypeA.CurrentAccount ? TypeA.SavingAccount : TypeA.CurrentAccount;
  }

  toggleBank() {
    this.bank = this.bank === Bank.CIH ? Bank.BMCE : this.bank === Bank.BMCE ? Bank.AttijariWafaBank : this.bank === Bank.AttijariWafaBank ? Bank.MaghrebBank : Bank.CIH;
  }
}
