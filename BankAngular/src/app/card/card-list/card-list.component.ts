import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { Card } from '../../model/card';
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardService.getAllCards().subscribe({
      next: (cards) => {
        this.cards = cards;
      },
      error: (error) => {
        console.error('There was an error loading the cards!', error);
      }
    });
  }

  updateCard(id: number): void {
    // Navigate to the update form or handle update here
    console.log('Update card with ID:', id);
  }

  deleteCard(id: number): void {
    this.cardService.deleteCard(id).subscribe({
      next: () => {
        this.cards = this.cards.filter(card => card.idC !== id);
        console.log('Card deleted successfully');
      },
      error: (error) => {
        console.error('There was an error deleting the card', error);
      }
    });
  }
}
