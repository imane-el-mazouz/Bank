import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AccountService } from '../../service/account.service';
import { TypeA } from '../../Enum/TypeA';
import { Bank } from '../../Enum/bank';
import {KeyValuePipe, NgForOf} from "@angular/common";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    ReactiveFormsModule,
    NavbarComponent
  ],
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {
  accountForm: FormGroup;
  typeAEnum = TypeA;
  bankEnum = Bank;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private fb: FormBuilder
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
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      if (this.id) {
        this.loadAccountData();
      }
    });
  }

  loadAccountData(): void {
    this.accountService.getAccount(this.id).subscribe(
      account => {
        this.accountForm.patchValue({
          typeA: account.typeA,
          sold: account.sold,
          rib: account.rib,
          date: account.date,
          bank: account.bank
        });
      },
      error => {
        console.error('Error loading account data', error);
      }
    );
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      this.accountService.updateAccount(this.id, this.accountForm.value).subscribe(
        () => {
          this.router.navigate(['/accounts']);
        },
        error => {
          console.error('Error updating account', error);
        }
      );
    }
  }
}
