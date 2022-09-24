import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService, User } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-account-form',
  templateUrl: './update-account-form.component.html',
  styleUrls: ['./update-account-form.component.css']
})
export class UpdateAccountFormComponent implements OnInit {
  isLoading:boolean=false;
  Error:any=null;
  regex:any=null;
  username:string="";
  CurrentUser:User={
  "id": 0,
  "username": '',
  "email":'',
  "firstName": '',
  "lastName": '',
  "accessToken": '',
  "refreshToken": '',
  "isAdmin":false

  };
  constructor(
    public router:Router,
    public userService:UserService,
    public storageService:LocalstorageService
  ){}
  
  updateAccountForm=new FormGroup({
    firstnameFormControl:new FormControl('',[Validators.required]),
    lastnameFormControl:new FormControl('',[Validators.required]),
    nameFormControl:new FormControl('',[Validators.required]),
    emailFormControl:new FormControl('',[Validators.required,Validators.pattern(this.regex=new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'))])
  });
  public get firstnameFormControl(){
    return this.updateAccountForm.controls['firstnameFormControl'] as FormControl;
  }
  public get lastnameFormControl(){
    return this.updateAccountForm.controls['lastnameFormControl'] as FormControl;
  }
  public get nameFormControl(){
    return this.updateAccountForm.controls['nameFormControl'] as FormControl;
  }
  public get emailFormControl(){
    return this.updateAccountForm.controls['emailFormControl'] as FormControl;
  }
  ngOnInit(): void {
    
    this.CurrentUser=this.storageService.GetCurrentuesr;
    this.nameFormControl.setValue(this.CurrentUser.username);
    this.firstnameFormControl.setValue(this.CurrentUser.firstName);
    this.lastnameFormControl.setValue(this.CurrentUser.lastName)
    this.emailFormControl.setValue(this.CurrentUser.email)
  }
  onSubmit(){
    this.isLoading=true;
    this.username=this.updateAccountForm.value['nameFormControl'];
    this.username=this.username.trim();
    if(this.updateAccountForm.valid){
      let url=GlobalComponent.apiUrl+"user/update";
      let body={
          id:this.CurrentUser.id,
          username:this.username,
          firstName:this.updateAccountForm.value['firstnameFormControl'],
          lastName:this.updateAccountForm.value['lastnameFormControl'],
          email:this.updateAccountForm.value['emailFormControl']
      }
      console.log('body -> ',body);
      this.userService.UpdateAccount(url,body).subscribe(
        (r:any)=>{
          this.isLoading=false;
          if(r.responseCode==1){
            console.log(r);
            
            this.CurrentUser.email=r.responseBody.email;
            this.CurrentUser.username=r.responseBody.username;
            this.CurrentUser.firstName=r.responseBody.firstName;
            this.CurrentUser.lastName=r.responseBody.lastName;
            this.CurrentUser.accessToken=this.storageService.GetCurrentuesr.accessToken;
            this.CurrentUser.refreshToken=this.storageService.GetCurrentuesr.refreshToken;
            this.storageService.SetCurrentUser=this.CurrentUser;
            if (this.storageService.GetUserType.userType=='admin') {
              this.router.navigate(['/adminmain'])
            }
            else{
            this.router.navigate(['/main']);
            }
          }
          else{
            this.Error={
              error:{
                error:r.responseMessage
              }
            }
          }
          
        },
        e=>{
          console.log('error => ',e)
          this.Error=e;
          this.isLoading=false;
        }
      )
    }
    else{
      console.log('form -> ',this.updateAccountForm.value);
    
      this.isLoading=false;
    }
    }

    goToMain(){
      if (this.storageService.GetUserType.userType=='admin') {
        this.router.navigate(['/adminmain'])
      }else{
        this.router.navigate(['/main'])
      }
    }
}

