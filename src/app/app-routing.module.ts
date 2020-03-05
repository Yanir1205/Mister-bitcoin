import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component'
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthGuardService } from './services/auth-guard-service/auth-guard-service.service';

const routes: Routes = [

  { path: 'signup', component: SignupPageComponent },
  { path: 'contact', component: ContactPageComponent, canActivate: [AuthGuardService] },
  { path: 'contact/edit/:id', component: ContactEditComponent, canActivate: [AuthGuardService] },
  { path: 'contact/edit', component: ContactEditComponent, canActivate: [AuthGuardService] },
  { path: 'contact/:id', component: ContactDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'statistics', component: StatisticsPageComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
