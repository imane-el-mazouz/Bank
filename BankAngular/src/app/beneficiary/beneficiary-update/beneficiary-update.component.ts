import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BeneficiaryService } from '../../service/beneficiary.service';
import { Beneficiary } from '../../model/beneficiary';
import { Bank } from '../../Enum/bank';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-beneficiary-update',
  templateUrl: './beneficiary-update.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./beneficiary-update.component.scss']
})
export class BeneficiaryUpdateComponent implements OnInit {
  beneficiaryForm: FormGroup;
  bankEnum = Bank;
  beneficiaryId: number;

  constructor(
    private fb: FormBuilder,
    private beneficiaryService: BeneficiaryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.beneficiaryForm = this.fb.group({
      name: ['', Validators.required],
      rib: ['', Validators.required],
      bank: ['', Validators.required],
      sold: ['', [Validators.required, Validators.min(0)]]
    });
    this.beneficiaryId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loadBeneficiary();
  }

  loadBeneficiary(): void {
    this.beneficiaryService.getBeneficiary(this.beneficiaryId).subscribe({
      next: (beneficiary) => {
        this.beneficiaryForm.patchValue(beneficiary);
      },
      error: (error) => {
        console.error('There was an error loading the beneficiary!', error);
      }
    });
  }

  onSubmit(): void {
    if (this.beneficiaryForm.valid) {
      const beneficiary: Beneficiary = this.beneficiaryForm.value;
      this.beneficiaryService.updateBeneficiary(this.beneficiaryId, beneficiary).subscribe({
        next: (response) => {
          console.log('Beneficiary updated successfully', response);
          this.router.navigate(['/beneficiaries']);
        },
        error: (error) => {
          console.error('There was an error updating the beneficiary', error);
        }
      });
    }
  }

  protected readonly Object = Object;
}
