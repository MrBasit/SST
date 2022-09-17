import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InitialFormComponent } from './initial-form/initial-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
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
import { MatStepper, MatStepperModule, MatVerticalStepper } from '@angular/material/stepper';
import { InitialHeaderComponent } from './initial-header/initial-header.component';
import { AdminMainFormComponent } from './admin-main-form/admin-main-form.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminUpdateFormComponent } from './admin-update-form/admin-update-form.component';
import { AdminCreateUserFormComponent } from './admin-create-user-form/admin-create-user-form.component';
import { AdminViewUserPopupComponent } from './admin-view-user-popup/admin-view-user-popup.component';
import { MatSortModule } from '@angular/material/sort';
import { AdminCrudUserFormComponent } from './admin-crud-user-form/admin-crud-user-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SetsCrudFormComponent } from './sets-crud-form/sets-crud-form.component';
import { AddSetComponent } from './add-set/add-set.component';
import { EditSetComponent } from './edit-set/edit-set.component';
import { DeleteSetPopUpComponent } from './delete-set-pop-up/delete-set-pop-up.component';
import { SetViewComponentPopUpComponent } from './set-view-component-pop-up/set-view-component-pop-up.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { StakeholdersCrudFormComponent } from './stakeholders-crud-form/stakeholders-crud-form.component';
import { CreateStakeholderComponent } from './create-stakeholder/create-stakeholder.component';
import { StakeholderViewPopUpComponent } from './stakeholder-view-pop-up/stakeholder-view-pop-up.component';
import { ObjectivesCrudFormComponent } from './objectives-crud-form/objectives-crud-form.component';
import { StakeholderDeletePopUpComponent } from './stakeholder-delete-pop-up/stakeholder-delete-pop-up.component';
import { ObjectiveDeletePopUpComponent } from './objective-delete-pop-up/objective-delete-pop-up.component';
import { ObjectiveViewPopUpComponent } from './objective-view-pop-up/objective-view-pop-up.component';
import { EditStakeholderComponent } from './edit-stakeholder/edit-stakeholder.component';
import { EditObjectiveComponent } from './edit-objective/edit-objective.component';
import { CreateObjectiveComponent } from './create-objective/create-objective.component';

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
    AdminMainFormComponent,
    AdminUpdateFormComponent,
    AdminCreateUserFormComponent,
    AdminViewUserPopupComponent,
    AdminCrudUserFormComponent,
    SetsCrudFormComponent,
    AddSetComponent,
    EditSetComponent,
    DeleteSetPopUpComponent,
    SetViewComponentPopUpComponent,
    StakeholdersCrudFormComponent,
    CreateStakeholderComponent,
    StakeholderViewPopUpComponent,
    ObjectivesCrudFormComponent,
    StakeholderDeletePopUpComponent,
    ObjectiveDeletePopUpComponent,
    ObjectiveViewPopUpComponent,
    EditStakeholderComponent,
    EditObjectiveComponent,
    CreateObjectiveComponent,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: '', component: InitialFormComponent },
      { path: 'signin', component: SigninFormComponent },
      { path: 'signup', component: SignupFormComponent },
      { path: 'main', component: MainFormComponent },
      { path: 'changepassword', component: ChangePasswordFormComponent },
      { path: 'updateaccount', component: UpdateAccountFormComponent },
      { path: 'forgotpassword', component: ForgotpasswordFormComponent },
      { path: 'adminmain', component: AdminMainFormComponent },
      { path: 'adminupdate', component: AdminUpdateFormComponent, data: { data: {} } },
      { path: 'createuser', component: AdminCreateUserFormComponent },
      { path: 'edituser', component: AdminCrudUserFormComponent },
      { path: 'setsuser', component: SetsCrudFormComponent },
      { path: 'addSet', component: AddSetComponent },
      { path: 'editSet', component: EditSetComponent },
      { path: 'stakeholdersUser', component: StakeholdersCrudFormComponent },
      { path: 'createStakeholder', component: CreateStakeholderComponent },
      { path: 'objectivesUser', component:ObjectivesCrudFormComponent},
      { path: 'editStakeholder',  component:EditStakeholderComponent},
      { path: 'editObjective', component:EditObjectiveComponent},
      { path: 'createObjective', component:CreateObjectiveComponent}
    ])
  ],
  providers: [UserService, HttpClient, LocalstorageService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
