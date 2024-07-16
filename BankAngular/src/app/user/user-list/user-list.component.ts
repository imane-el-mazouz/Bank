
import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  users : User[] = [];

  constructor(private userService : UserService) {}


  ngOnInit(): void {
    this.userService.findAll().subscribe(data =>{
      this.users= data;
    });




  }


  deleteUser(id: number) {

  }
}
