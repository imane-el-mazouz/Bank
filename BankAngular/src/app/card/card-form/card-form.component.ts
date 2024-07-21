import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../../service/card.service';
import { KeyValuePipe, NgForOf } from '@angular/common';

enum TypeC {
  Credit = 'Credit',
  Debit = 'Debit',
}

enum Status {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
  Blocked = 'Blocked',
}

enum Reason {
  Loss = 'Loss',
  Theft = 'Theft',
  None = 'None',
}

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    KeyValuePipe,
    ReactiveFormsModule
  ],
  styleUrls: ['./card-form.component.scss']
})
export class CardAddComponent {
  cardForm: FormGroup;
  typeC = TypeC;
  status = Status;
  reason = Reason;

  readonly typeCEntries = [
    {key: 'Credit', value: TypeC.Credit},
    {key: 'Debit', value: TypeC.Debit}
  ];

  readonly statusEntries = [
    {key: 'Activated', value: Status.Activated},
    {key: 'Deactivated', value: Status.Deactivated},
    {key: 'Blocked', value: Status.Blocked}
  ];

  readonly reasonEntries = [
    {key: 'Loss', value: Reason.Loss},
    {key: 'Theft', value: Reason.Theft},
    {key: 'None', value: Reason.None}
  ];

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private router: Router
  ) {
    this.cardForm = this.fb.group({
      id: [''],
      typeCard: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      this.cardService.saveCard(this.cardForm.value).subscribe(
        response => {
          console.log('Card added successfully', response);
          this.router.navigate(['/cards']);
        },
        error => {
          console.error('Error adding card', error);
        }
      );
    }
  }
}
