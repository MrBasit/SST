import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { LocalstorageService } from './../localstorage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalComponent } from 'src/global-component';

@Component({
  selector: 'app-admin-add-set',
  templateUrl: './admin-add-set.component.html',
  styleUrls: ['./admin-add-set.component.css']
})
export class AdminAddSetComponent implements OnInit {

  isLoading: boolean = false;

  isSignupSuccessfull = false;
  Error: any = null;
  Error2: any = null;
  regex: any = null;
  CurrentUser: any = {};
  trimmedName:string="";
  userList:any=[];

  constructor(public http: HttpClient
    , public router: Router
    , public userService: UserService
    , private storageService: LocalstorageService) {
    this.CurrentUser = this.storageService.GetCurrentuesr;
  }

  addSetForm = new FormGroup({
    setName: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    userName:new FormControl('',[Validators.required])
  })
  public get setName() {
    return this.addSetForm.get('setName') as FormControl;
  }
  public get Description() {
    return this.addSetForm.get('Description') as FormControl;
  }
  public get userName(){
    return this.addSetForm.get('userName') as FormControl;
  }



  ngOnInit(): void {

    

    this.isLoading=true;
      let url=GlobalComponent.apiUrl+"user/get";
      this.userService.Awake(url).subscribe(
        (r:any)=>{
          this.isLoading=false;
          console.log('r => ',r);
          this.userList=r;
        },
        e=>{
          this.ngOnInit();
        }
      )


  }

  onSubmit() {

    if (this.addSetForm.valid) {
      this.isLoading = true;
      console.log(this.addSetForm.value);
      let url = GlobalComponent.apiUrl + "set/addSet";
      let userName=this.addSetForm.value['userName'];
      console.log(userName);
      this.trimmedName=this.addSetForm.value['setName'];
      this.trimmedName=this.trimmedName.trim();
      let body = {
        userId: userName.id,
        name: this.trimmedName,
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
            this.router.navigate(['/adminEditSet'])
          }
        },
        e => {
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
