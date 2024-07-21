import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {AppComponent} from "./app/app.component";
import {NavbarComponent} from "./app/components/navbar/navbar.component";
import {FooterComponent} from "./app/components/footer/footer.component";
import {HomeComponent} from "./app/components/home/home.component";
import {UserListComponent} from "./app/user/user-list/user-list.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app.routes";
import {UserService} from "./app/service/user.service";
import {AuthInterceptorService} from "./app/service/auth-interceptor-service.service";
import {BeneficiaryListComponent} from "./app/beneficiary/beneficiary-list/beneficiary-list.component";
import {BeneficiaryFormComponent} from "./app/beneficiary/beneficiary-form/beneficiary-form.component";
import {BeneficiaryUpdateComponent} from "./app/beneficiary/beneficiary-update/beneficiary-update.component";


@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserListComponent,
    FooterComponent,
    BeneficiaryListComponent,
    BeneficiaryFormComponent,
    BeneficiaryUpdateComponent
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    }
  ],
  bootstrap: []
})
export class AppModule { }
