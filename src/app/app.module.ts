import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/common/login/login.component';
import { InformationComponent } from './components/nurse/information/information.component';
import { EmergencyAlertComponent } from './components/patient/emergency-alert/emergency-alert.component';
import { InformationFormComponent } from './components/nurse/information-form/information-form.component';
import { SelfCheckupComponent } from './components/patient/self-checkup/self-checkup.component';
import { HomeComponent } from './components/common/home/home.component';
import { RegisterComponent } from './components/common/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InformationComponent,
    EmergencyAlertComponent,
    InformationFormComponent,
    SelfCheckupComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
