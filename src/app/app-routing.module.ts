import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ClientHomeComponent } from './client-home/client-home.component';
import { BillingComponent } from './billing/billing.component';
import { DocumentsComponent } from './documents/documents.component';
import { FirmProfileComponent } from './firm-profile/firm-profile.component';
import { OurTeamComponent } from './our-team/our-team.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'client-home', component: ClientHomeComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'firm-profile', component: FirmProfileComponent },
  { path: 'our-team', component: OurTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
