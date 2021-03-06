import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMealComponent } from './addmeal/addmeal.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';
import { ListMealsComponent } from './listmeals/listmeals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatPaginatorModule,
  MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


export function jwtOptionsFactory(tokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getAsyncToken();
    }
  };
}

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    RegisterComponent,
    FooterComponent,
    SigninComponent,
    AddMealComponent,
    PageNotFoundComponent,
    UsersComponent,
    ListMealsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    HttpClientModule,
    ButtonsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000']
      }
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
