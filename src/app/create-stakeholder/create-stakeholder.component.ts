import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-stakeholder',
  templateUrl: './create-stakeholder.component.html',
  styleUrls: ['./create-stakeholder.component.css']
})
export class CreateStakeholderComponent implements OnInit {

  isLoading: boolean = false;

  isSignupSuccessfull = false;
  Error: any = null;
  Error2: any = null;
  regex: any = null;
  CurrentUser: any = {};
  trimmedName: string = "";
  stakeholderList: any = [];

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

    this.isLoading = true;
    let url = GlobalComponent.apiUrl + "admin/getObjectivesStakeholders";

    this.userService.getAdminData(url).subscribe(
      (r: any) => {

        this.stakeholderList = r.getStakeholderResponseDTO.stakeholderResponseDTOS;
        console.log(this.stakeholderList);
        this.isLoading = false;

      }
    )

  }

  onSubmit() {

    if (this.addSetForm.valid) {
      this.isLoading = true;
      console.log(this.addSetForm.value);
      let url = GlobalComponent.apiUrl + "stakeholder/addStakeholder";
      let body = {
        setId: this.storageService.GetUserSet.id,
        name: this.addSetForm.value['setName'].name,
        description: this.addSetForm.value['Description'],
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
            this.router.navigate(['/stakeholdersUser'])
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
