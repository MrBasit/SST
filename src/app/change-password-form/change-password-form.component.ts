import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService, User } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
  // CurrentUser:User={
  //   id:0,
  //   username:'',
  //   firstName:'',
  //   lastName:'',
  //   accessToken:'',
  //   refreshToken:''
  // };
  CurrentUser:any={}
  isLoading:boolean=false;
  Error:any=null;
  constructor(public userService:UserService,public router:Router,private storageService:LocalstorageService) { 
    this.CurrentUser=this.storageService.GetCurrentuesr;
  }
  ngOnInit(): void {
    this.CurrentUser=this.storageService.GetCurrentuesr;
  }

  changePasswordForm=new FormGroup({
    currentPasswordFormControl:new FormControl('',[Validators.required]),
    newPasswordFormControl:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
    confirmPasswordFormControl:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
  })

  public get currentPasswordFormControl(){
    return this.changePasswordForm.get('currentPasswordFormControl') as FormControl;
  }
  public get newPasswordFormControl(){
    return this.changePasswordForm.get('newPasswordFormControl') as FormControl;
  }
  public get confirmPasswordFormControl(){
    return this.changePasswordForm.get('confirmPasswordFormControl') as FormControl;
  }

  onSubmit(){
    this.isLoading=true;
    if(this.newPasswordFormControl.value != this.confirmPasswordFormControl.value){
      this.confirmPasswordFormControl.setErrors({'PasswordMismatch':true})
    }
    if(this.changePasswordForm.valid){
      let url="http://stackholder-env.eba-ku4mxseq.ap-south-1.elasticbeanstalk.com/user/updatepassword";
      let body={
          "id":this.CurrentUser.id,
          "currentPassword":this.changePasswordForm.value['currentPasswordFormControl'],
          "newPassword":this.changePasswordForm.value['newPasswordFormControl']
      }
      console.log('body -> ',body);
      this.userService.ChangePassword(url,body).subscribe(
        (r:any)=>{
          this.isLoading=false;
          if(r.responseCode==1){
            console.log(r);
            this.router.navigate(['/main']);
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
          this.isLoading=false;
          console.log('error => ',e)
          this.Error=e;
        }
      )
    }
    else{
      console.log('invalid form')
      this.isLoading=false;
    }
    console.log('form -> ',this.changePasswordForm.value);
  }

}
