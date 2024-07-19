import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Bank} from "../../Enum/bank";
import {AccountService} from "../../service/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Account} from "../../model/account";
import {Beneficiary} from "../../model/beneficiary";
import {BeneficiaryService} from "../../service/beneficiary.service";

@Component({
  selector: 'app-beneficiary-form',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './beneficiary-form.component.html',
  styleUrl: './beneficiary-form.component.scss'
})
export class BeneficiaryFormComponent implements OnInit{

  beneficiaryForm: FormGroup;
  bankEnum = Bank;
  bank: Bank = Bank.CIH;
  private beneficiaryService: any;

  constructor(
    private fb: FormBuilder,
    private beneficiary: BeneficiaryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.beneficiaryForm = this.fb.group({
      name: ['', Validators.required],
      rib: ['', Validators.required],
      bank: ['', Validators.required],
      sold: ['', [Validators.required, Validators.min(0)]],

    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.beneficiaryForm.valid) {
      const beneficiary: Beneficiary = this.beneficiaryForm.value;
      this.beneficiary.saveBenef(beneficiary).subscribe({
        next: (response) => {
          console.log('Beneficiary saved successfully', response);
          this.router.navigate(['/beneficiaries']);
        },
        error: (error) => {
          console.error('There was an error saving the beneficiary', error);
        }
      });
    }
  }


  protected readonly Object = Object;
}
