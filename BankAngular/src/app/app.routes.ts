import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UpdateUserFormComponent} from "./user/user-update/user-update.component";
import {AccountListComponent} from "./account/account-list/account-list.component";

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'updateUser/:id', component: UpdateUserFormComponent },
  { path: 'accounts', component: AccountListComponent },

  { path: '', redirectTo: '/addUser', pathMatch: 'full' }
];
