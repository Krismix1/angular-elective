import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { EditBabyComponent } from './edit-baby/edit-baby.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: 'babies',
        component: BabyListComponent,
        children: [{
          path: 'edit/:id',
          component: EditBabyComponent
        }]
      },
      {
        path: 'babysitters',
        component: BabysitterListComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
