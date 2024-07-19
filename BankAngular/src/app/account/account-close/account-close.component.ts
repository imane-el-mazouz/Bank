import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-close',
  templateUrl: './account-close.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./account-close.component.scss']
})
export class AccountCloseComponent implements OnInit {
  accountCloseForm: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private fb: FormBuilder
  ) {
    this.accountCloseForm = this.fb.group({
      closureReason: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });
  }

  onSubmit(): void {
    if (this.accountCloseForm.valid) {
      this.accountService.closeAccount(this.id, this.accountCloseForm.value).subscribe(
        () => {
          this.router.navigate(['/accounts']);
        },
        error => {
          console.error('Error closing account', error);
        }
      );
    }
  }
}
