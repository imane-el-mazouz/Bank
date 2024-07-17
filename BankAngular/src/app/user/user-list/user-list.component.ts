// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { User } from '../../model/user';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import {UserService} from "../../service/user.service";
//
//
// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrl: './user-list.component.scss' ,
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, RouterLink ]
// })
// export class UserListComponent implements OnInit {
//   users: User[] = [];
//
//   constructor(private userService: UserService) { }
//
//   ngOnInit(): void {
//     this.userService.findAll().subscribe(data => {
//       this.users = data;
//     });
//   }
//
//   deleteUser(idU: number): void {
//     this.userService.deleteUser(idU).subscribe(() => {
//       this.users = this.users.filter(user => user.idU !== idU);
//     });
//   }
//   updateUser(idU: number, user: User): void {
//     this.userService.updateUser(idU, user).subscribe(()=> {
//       this.users = this.users.filter(user => user.idU !== idU);
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(idU: number): void {
    this.userService.deleteUser(idU).subscribe(() => {
      this.users = this.users.filter(user => user.idU !== idU);
    });
  }

  updateUser(idU: number, user: User): void {
    this.userService.updateUser(idU, user).subscribe(() => {
      console.log('User updated successfully');
    });
  }
}
