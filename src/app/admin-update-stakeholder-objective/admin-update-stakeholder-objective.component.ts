import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-update-stakeholder-objective',
  templateUrl: './admin-update-stakeholder-objective.component.html',
  styleUrls: ['./admin-update-stakeholder-objective.component.css']
})
export class AdminUpdateStakeholderObjectiveComponent implements OnInit {

  isLoading: boolean = false;
  UserSet: any = {};
  Error: any = null;
  Error2: any = null;
  trimmedName: string = "";
  updateType: string = "";


  constructor(public http: HttpClient, public router: Router, public userService: UserService
    , private storageService: LocalstorageService) {
    this.UserSet = this.storageService.GetUserSet;
  }

  addSetForm = new FormGroup({
    setName: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
  })
  public get setName() {
    return this.addSetForm.get('setName') as FormControl;
  }
  public get Description() {
    return this.addSetForm.get('Description') as FormControl;
  }


  ngOnInit(): void {

    console.log(this.storageService.GetAdminUpdateType)
    this.setName.setValue(this.storageService.GetAdminUpdateType.name);
    this.Description.setValue(this.storageService.GetAdminUpdateType.description);
    this.updateType = this.storageService.GetAdminUpdateType.updateType;
  }

  goToStakeholderObjective() {
    if (this.updateType == 'Objective') {
      this.router.navigate(['/adminEditObjective'])
    } else {
      this.router.navigate(['/adminEditStakeholder'])
    }
  }

  onSubmit() {

    if (this.addSetForm.valid) {
      this.isLoading = true;
      console.log(this.addSetForm.value);
      let url="";
      let body={};
      this.trimmedName = this.addSetForm.value['setName'];
      this.trimmedName = this.trimmedName.trim();
      if(this.storageService.GetCrudType.isCrudSet){
        url = GlobalComponent.apiUrl + "admin/updateSetStakeholderObjective";
        body = {
          updateType: this.updateType,
          id: this.storageService.GetAdminUpdateType.id,
          name: this.trimmedName,
          description: this.addSetForm.value['Description'],
          setId:this.storageService.GetAdminUpdateType.setId
        }
      }else{
      url = GlobalComponent.apiUrl + "admin/updateStakeholderObjective";
      body = {
        updateType: this.updateType,
        id: this.storageService.GetAdminUpdateType.id,
        name: this.trimmedName,
        description: this.addSetForm.value['Description'],
      }
      }
      
      console.log('body -> ', body);
      this.userService.UpdateSet(url, body).subscribe(
        (r: any) => {
          this.isLoading = false;
          if (r.responseCode != 1) {
            this.Error = {
              error: {
                error: r.responseMessage
              }
            }
          }
          else {
            this.Error = null;
            console.log(r);
            if (this.updateType == 'Objective') this.router.navigate(['/adminEditObjective'])
            else this.router.navigate(['/adminEditStakeholder'])
          }
        },
        (e: any) => {
          this.isLoading = false;

          this.Error = e.error.responseMessage;
          console.log('error => ', this.Error)
        }
      )

    }
    else {
      console.log('invalid form ', this.addSetForm)
    }
  }
}
