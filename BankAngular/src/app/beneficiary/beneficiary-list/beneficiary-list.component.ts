import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { BeneficiaryService } from '../../service/beneficiary.service';
import { Beneficiary } from '../../model/beneficiary';

@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.scss']
})
export class BeneficiaryListComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];

  constructor(private beneficiaryService: BeneficiaryService) {}

  ngOnInit(): void {
    this.beneficiaryService.getBeneficiaries().subscribe({
      next: (data) => {
        this.beneficiaries = data;
      },
      error: (error) => {
        console.error('There was an error fetching the beneficiaries', error);
      }
    });
  }
}
