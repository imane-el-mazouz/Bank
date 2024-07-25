import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
