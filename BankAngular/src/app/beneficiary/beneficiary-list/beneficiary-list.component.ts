import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryService } from '../../service/beneficiary.service';
import { Beneficiary } from '../../model/beneficiary';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./beneficiary-list.component.scss']
})
export class BeneficiaryListComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];

  constructor(
    private beneficiaryService: BeneficiaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBeneficiaries();
  }

  loadBeneficiaries(): void {
    this.beneficiaryService.getBeneficiaries().subscribe({
      next: (data) => {
        this.beneficiaries = data;
      },
      error: (error) => {
        console.error('There was an error loading the beneficiaries!', error);
      }
    });
  }

  updateBeneficiary(id: number): void {
    this.router.navigate(['/updatebenef', id]);
  }
  deleteBeneficiary(id: number): void {
    this.beneficiaryService.deleteBeneficiary(id).subscribe({
      next: () => {
        this.loadBeneficiaries();
      },
      error: (error) => {
        console.error('There was an error deleting the beneficiary!', error);
      }
    });
  }
}
