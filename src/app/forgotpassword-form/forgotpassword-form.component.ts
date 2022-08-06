import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService, User } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpassword-form',
  templateUrl: './forgotpassword-form.component.html',
  styleUrls: ['./forgotpassword-form.component.css']
})
export class ForgotpasswordFormComponent implements OnInit {

  CurrentUser:any={}
  isLoading:boolean=false;
  Error:any=null;
  constructor(public userService:UserService,public router:Router,private storageService:LocalstorageService) { 
    this.CurrentUser=this.storageService.GetCurrentuesr;
  }
  ngOnInit(): void {
    this.CurrentUser=this.storageService.GetCurrentuesr;
  }
  
  forgotPasswordForm=new FormGroup({
    emailformControl:new FormControl('',[Validators.required]),
    currentPasswordFormControl:new FormControl('',[Validators.required]),
    newPasswordFormControl:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
    confirmPasswordFormControl:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
  
  })
  public get emailformControl(){
    return this.forgotPasswordForm.get('emailformControl') as FormControl;
  }
  public get currentPasswordFormControl(){
    return this.forgotPasswordForm.get('currentPasswordFormControl') as FormControl;
  }
  public get newPasswordFormControl(){
    return this.forgotPasswordForm.get('newPasswordFormControl') as FormControl;
  }
  public get confirmPasswordFormControl(){
    return this.forgotPasswordForm.get('confirmPasswordFormControl') as FormControl;
  }

  forgot(){
    this.isLoading=true;
    let url="https://calm-hamlet-62154.herokuapp.com/user/forgotpassword";
      let body={
          "email":this.forgotPasswordForm.value['emailformControl']
      }

      this.userService.ForgotPassword(url,body).subscribe(
        (r:any)=>{
          this.isLoading=false;
          if(r.responseCode==1){
            console.log(r);
            
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

  onSubmit(){
    this.isLoading=true;
    if(this.newPasswordFormControl.value != this.confirmPasswordFormControl.value){
      this.confirmPasswordFormControl.setErrors({'PasswordMismatch':true})
    }
    if(this.forgotPasswordForm.valid){
      let url="https://calm-hamlet-62154.herokuapp.com/user/updateforgotpassword";
      let body={
          "email":this.forgotPasswordForm.value['emailformControl'],
          "currentPassword":this.forgotPasswordForm.value['currentPasswordFormControl'],
          "newPassword":this.forgotPasswordForm.value['newPasswordFormControl']
      }
      console.log('body -> ',body);
      this.userService.ChangeForgotPassword(url,body).subscribe(
        (r:any)=>{
          this.isLoading=false;
          if(r.responseCode==1){
            console.log(r);
            this.router.navigate(['/signin']);
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
    console.log('form -> ',this.forgotPasswordForm.value);
  }
}
