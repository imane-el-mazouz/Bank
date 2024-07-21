import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { Card } from '../../model/card';
import { CommonModule, DatePipe, NgForOf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {Router, RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    FormsModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    NgForOf,
    FooterComponent,
    NavbarComponent
  ],
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService, private router: Router) { }

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

  updateCardStatus(id: number, status: string): void {
    this.cardService.updateCardStatus(id, { status }).subscribe(
      () => {
        this.loadCards();
      },
      error => {
        console.error('Error updating card status', error);
      }
    );
  }

  blockCard(id: number): void {
    const reason = prompt('Please enter the reason for blocking this card:');
    if (reason) {
      const updatedCard = { status: 'Blocked', blockingReason: reason };
      this.cardService.updateCardStatus(id, updatedCard).subscribe(
        () => {
          this.loadCards();
        },
        error => {
          console.error('Error blocking card', error);
        }
      );
    }
  }

  updateCard(id: number): void {
    this.router.navigate(['/updatecard', id]);
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
