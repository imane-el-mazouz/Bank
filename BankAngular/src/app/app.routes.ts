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
import {AccountCloseComponent} from "./account/account-close/account-close.component";
import {BeneficiaryFormComponent} from "./beneficiary/beneficiary-form/beneficiary-form.component";
import {BeneficiaryListComponent} from "./beneficiary/beneficiary-list/beneficiary-list.component";
import {BeneficiaryUpdateComponent} from "./beneficiary/beneficiary-update/beneficiary-update.component";
import {CardListComponent} from "./card/card-list/card-list.component";
import {CardAddComponent} from "./card/card-form/card-form.component";




export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'addAccount', component: AccountFormComponent },


  { path: 'home', component: HomeComponent },
  { path: 'updateUser/:id', component: UpdateUserFormComponent },
  { path: 'updateAccount/:id', component: AccountUpdateComponent },
  { path: 'close/:id', component: AccountCloseComponent },



  { path: 'beneficiaries', component: BeneficiaryListComponent },
  { path: 'benef', component: BeneficiaryFormComponent },
  { path: 'updatebenef/:id', component: BeneficiaryUpdateComponent },


  { path: 'accounts', component: AccountListComponent },
  { path: 'login', component: LoginComponent },
  { path : 'signup' , component: SignupComponent},



  { path: 'cards', component: CardListComponent },
  { path: 'addcard', component: CardAddComponent },


  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
