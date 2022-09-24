import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';
import { CrudType } from './../localstorage.service';

@Component({
  selector: 'app-admin-add-stakeholder-objective',
  templateUrl: './admin-add-stakeholder-objective.component.html',
  styleUrls: ['./admin-add-stakeholder-objective.component.css']
})
export class AdminAddStakeholderObjectiveComponent implements OnInit {

  isLoading: boolean = false;

  isSignupSuccessfull = false;
  Error: any = null;
  Error2: any = null;
  regex: any = null;
  CurrentUser: any = {};
  trimmedName: string = "";
  addType: string = "";
  setList:any=[];
  isCrudSet:boolean=false;
  

  constructor(public http: HttpClient, public router: Router, public userService: UserService
    , private storageService: LocalstorageService) {
    this.CurrentUser = this.storageService.GetCurrentuesr;
  }

  addSetForm = new FormGroup({
    setName: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Sets:new FormControl('',[Validators.required])
  })
  public get setName() {
    return this.addSetForm.get('setName') as FormControl;
  }
  public get Description() {
    return this.addSetForm.get('Description') as FormControl;
  }
  public get Sets(){
    return this.addSetForm.get('Sets') as FormControl;
  }



  ngOnInit(): void {

    console.log(this.storageService.GetAdminAddType);
    this.addType = this.storageService.GetAdminAddType.addType;

    if (this.storageService.GetCrudType.isCrudSet) {
      this.isCrudSet=true;

      this.isLoading = true;
      let url = GlobalComponent.apiUrl + "admin/getSets";
      
      this.userService.getAdminData(url).subscribe(
        (r: any) => {
          this.setList = r.responseBody.setResponseDTOS; 
          console.log(this.setList);
          this.isLoading=false;
        }
      )
    }else{
      this.isCrudSet=false;
    }


  }

  goToStakeholderObjective() {
    if (this.addType == 'Objective') {
      this.router.navigate(['/adminEditObjective'])
    } else {
      this.router.navigate(['/adminEditStakeholder'])
    }
  }

  onSubmit() {

    if (this.addSetForm.valid) {
      this.isLoading = true;
      console.log(this.addSetForm.value);
      this.trimmedName = this.addSetForm.value['setName'];
      this.trimmedName = this.trimmedName.trim();

      let url="";
      let body={};
      if(this.storageService.GetCrudType.isCrudSet){
        url = GlobalComponent.apiUrl + "admin/addSetStakeholderObjective";
        body = {
          addType: this.addType,
          name: this.trimmedName,
          description: this.addSetForm.value['Description'],
          setId:this.addSetForm.value['Sets'].id
        }
      }else{
        url = GlobalComponent.apiUrl + "admin/addStakeholderObjective";
        body = {
          addType: this.addType,
          name: this.trimmedName,
          description: this.addSetForm.value['Description'],
        }
      }
      console.log('body -> ', body);
      this.userService.CreateSet(url, body).subscribe(
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
            this.isSignupSuccessfull = true;
            if (this.addType == 'Objective') this.router.navigate(['/adminEditObjective'])
            else this.router.navigate(['/adminEditStakeholder'])
          }
        },
        (e: any) => {
          this.isLoading = false;
          console.log('error => ', e)
          this.Error = e.error.responseMessage;
        }
      )



    }
    else {
      console.log('invalid form ', this.addSetForm)
    }
  }
}
