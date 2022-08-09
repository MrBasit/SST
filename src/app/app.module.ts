import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InitialFormComponent } from './initial-form/initial-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { UpdateAccountFormComponent } from './update-account-form/update-account-form.component';
import { DeleteAccountPopupComponent } from './delete-account-popup/delete-account-popup.component';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalstorageService } from './localstorage.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ForgotpasswordFormComponent } from './forgotpassword-form/forgotpassword-form.component';
import {MatStepper, MatStepperModule, MatVerticalStepper} from '@angular/material/stepper';
import { InitialHeaderComponent } from './initial-header/initial-header.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialFormComponent,
    MainFormComponent,
    SigninFormComponent,
    SignupFormComponent,
    ChangePasswordFormComponent,
    UpdateAccountFormComponent,
    DeleteAccountPopupComponent,
    ForgotpasswordFormComponent,
    InitialHeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      {path:'',component:InitialFormComponent},
      {path:'signin',component:SigninFormComponent},
      {path:'signup',component:SignupFormComponent},
      {path:'main',component:MainFormComponent},
      {path:'changepassword',component:ChangePasswordFormComponent},
      {path:'updateaccount',component:UpdateAccountFormComponent},
      {path:'forgotpassword',component:ForgotpasswordFormComponent}
    ])
  ],
  providers: [UserService,HttpClient,LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
