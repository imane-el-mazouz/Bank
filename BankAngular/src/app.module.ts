import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "./app/components/navbar/navbar.component";
import {FooterComponent} from "./app/components/footer/footer.component";
import {HomeComponent} from "./app/components/home/home.component";
import {UserListComponent} from "./app/user/user-list/user-list.component";
import {UserService} from "./app/service/user.service";
import {AppComponent} from "./app/app.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app.routes";



@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,

    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AppComponent,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    UserListComponent,

  ],
  providers: [UserService],

})
export class AppModule { }
