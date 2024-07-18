import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UpdateUserFormComponent} from "./user/user-update/user-update.component";
import {AccountListComponent} from "./account/account-list/account-list.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./singup/singup.component";
import {AccountUpdateComponent} from "./account/account-update/account-update.component";
import {AccountFormComponent} from "./account/account-form/account-form.component";


export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'addAccount', component: AccountFormComponent },

  { path: 'home', component: HomeComponent },
  { path: 'updateUser/:id', component: UpdateUserFormComponent },
  { path: 'updateAccount/:id', component: AccountUpdateComponent },

  { path: 'accounts', component: AccountListComponent },
  { path: 'login', component: LoginComponent },
  { path : 'signup' , component: SignupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
