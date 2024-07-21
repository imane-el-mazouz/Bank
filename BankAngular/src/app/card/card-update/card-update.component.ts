import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../service/card.service';
import { Card } from '../../model/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-update',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.scss']
})
export class CardUpdateComponent implements OnInit {
  cardForm: FormGroup;
  id!: number;

  readonly typeCEntries = [
    { key: 'Credit', value: 'Credit' },
    { key: 'Debit', value: 'Debit' }
  ];

  readonly statusEntries = [
    { key: 'Activated', value: 'Activated' },
    { key: 'Deactivated', value: 'Deactivated' },
    { key: 'Blocked', value: 'Blocked' }
  ];

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cardForm = this.fb.group({
      typeCard: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadCard();
  }

  loadCard(): void {
    this.cardService.getCardById(this.id).subscribe(
      card => {
        this.cardForm.patchValue(card);
      },
      error => {
        console.error('Error loading card data', error);
      }
    );
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      const updatedCard: Card = { idC: this.id, ...this.cardForm.value };
      this.cardService.updateCard(this.id, updatedCard).subscribe(
        () => {
          console.log('Card updated successfully');
          this.router.navigate(['/cards']); // Navigate to the card list or another appropriate route
        },
        error => {
          console.error('Error updating card', error);
        }
      );
    }
  }
}
