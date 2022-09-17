import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-objective',
  templateUrl: './edit-objective.component.html',
  styleUrls: ['./edit-objective.component.css']
})
export class EditObjectiveComponent implements OnInit {

  isLoading: boolean = false;
  UserSet: any = {};
  Error: any = null;
  Error2: any = null;
  trimmedName:string="";


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

    console.log(this.storageService.GetUserSet)
    this.setName.setValue(this.storageService.GetUserObjective.name);
    this.Description.setValue(this.storageService.GetUserObjective.description);

  }
  onSubmit() {

    if (this.addSetForm.valid) {
      this.isLoading = true;
      console.log(this.addSetForm.value);
      let url = GlobalComponent.apiUrl + "objective/updateObjective";
      this.trimmedName=this.addSetForm.value['setName'];
      this.trimmedName=this.trimmedName.trim();
      let body = {
        setId: this.storageService.GetUserSet.id,
        objectiveId: this.storageService.GetUserObjective.id,
        name: this.trimmedName,
        description: this.addSetForm.value['Description'],
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
            this.router.navigate(['/objectivesUser'])
          }
        },
        (e:any) => {
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
