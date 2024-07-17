import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./user/user-list/user-list.component";

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];
