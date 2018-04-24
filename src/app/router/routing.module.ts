import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/common/login/login.component';
import { InformationComponent } from '../components/nurse/information/information.component';
import { InformationFormComponent } from '../components/nurse/information-form/information-form.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Information', component: InformationComponent },
  { path: 'DailyInformation', component: InformationFormComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
