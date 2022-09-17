import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { LocalstorageService } from './../localstorage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalComponent } from 'src/global-component';

@Component({
  selector: 'app-assign-priority',
  templateUrl: './assign-priority.component.html',
  styleUrls: ['./assign-priority.component.css']
})
export class AssignPriorityComponent implements OnInit {

  isLoading: boolean = false;

  isSignupSuccessfull = false;
  Error: any = null;
  Error2: any = null;
  regex: any = null;
  CurrentUser: any = {};
  objectiveId:any="";
  objectiveList:any=[];
  objective:string="";
  priorityList:string[]=["LOW", "MEDIUM", "HIGH", "CRITICAL"];


  constructor(public http: HttpClient, public router: Router, public userService: UserService
    , private storageService: LocalstorageService) {
    this.CurrentUser = this.storageService.GetCurrentuesr;
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

    console.log(this.storageService.GetUserSet);
    
    this.isLoading = true;
    let url = GlobalComponent.apiUrl + "objective/getObjectives";
    let body = {
      setId: this.storageService.GetUserSet.id
    };
    console.log(body);
    this.userService.getData(url, body).subscribe(
      (r: any) => {

        this.objectiveList = r.responseBody.objectiveResponseDTOS;
        console.log(this.objectiveList);
        this.isLoading=false;
      }
    )

  }

  getObjectiveIdByName(objectiveName:any){

    for(let i=0;i<this.objectiveList.length;i++){
      if(this.objectiveList[i].name===objectiveName.name){
        return this.objectiveList[i].id;
      }
    }

  }

  onSubmit() {

    if (this.addSetForm.valid) {
      this.isLoading = true;
      console.log(this.addSetForm.value);
      let url = GlobalComponent.apiUrl + "priority/addPriority";
      this.objective=this.addSetForm.value['setName'];
      this.objectiveId=this.getObjectiveIdByName(this.objective);
      let body = {
        setId: this.storageService.GetUserSet.id,
        stakeholderId:this.storageService.GetUserStakeholder.id,
        objectiveId:this.objectiveId,
        priority: this.addSetForm.value['Description'],
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
            this.router.navigate(['/assignObjective'])
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
