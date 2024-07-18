import { Component } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.scss'
})

enum TypeA {
  CurrentAccount = 'currentAccount',
  SavingAccount = 'savingAccount'
}
export class AccountFormComponent {
  accountForm: FormGroup;
  enum: typeof  = TypeA;
  val: number = TypeA.currentAccount;

  onClick() {
    this.val =
      this.val === TypeA.currentAccount ? TypeA.savingAccount : MyEnum.currentAccount;
  }
}
}

  onSubmit() {

  }

  onClick() {

  }
}
