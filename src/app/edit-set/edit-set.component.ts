import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-set',
  templateUrl: './edit-set.component.html',
  styleUrls: ['./edit-set.component.css']
})
export class EditSetComponent implements OnInit {

  isLoading: boolean = false;
  UserSet: any = {};
  Error: any = null;
  Error2: any = null;

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
    this.setName.setValue(this.storageService.GetUserSet.name);
    this.Description.setValue(this.storageService.GetUserSet.description);

  }
  onSubmit() {

    if (this.addSetForm.valid) {
      this.isLoading = true;
      console.log(this.addSetForm.value);
      let url = GlobalComponent.apiUrl + "set/updateSet";
      let body = {
        userId: this.UserSet.userId,
        id: this.UserSet.id,
        name: this.addSetForm.value['setName'],
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
            this.router.navigate(['/setsuser'])
          }
        },
        e => {
          this.isLoading = false;
          console.log('error => ', e)
          this.Error = e;
        }
      )

    }
    else {
      console.log('invalid form ', this.addSetForm)
    }
  }

}
