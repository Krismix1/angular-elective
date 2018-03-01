import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { BabyListComponent } from './baby-list/baby-list.component';
import { BabysitterListComponent } from './babysitter-list/babysitter-list.component';
import { AuthGuard } from './guards/auth-guard';
import { AdminAuthGuard } from './guards/admin-auth-guard';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    PortalComponent,
    BabyListComponent,
    BabysitterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
