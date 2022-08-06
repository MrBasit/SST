import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  isLoading:boolean=false;
  isSignupSuccessfull=false;
  Error:any=null;
  constructor(public http:HttpClient,public router:Router,public userService:UserService) { }
  signupForm=new FormGroup({
    firstnameFormControl:new FormControl('',[Validators.required]),
    lastnameFormControl:new FormControl('',[Validators.required]),
    nameFormControl:new FormControl('',[Validators.required]),
    emailFormControl:new FormControl('',[Validators.required]),
    passwordFormControl:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
  })
  public get firstnameFormControl(){
    return this.signupForm.get('firstnameFormControl') as FormControl;
  }
  public get lastnameFormControl(){
    return this.signupForm.get('lastnameFormControl') as FormControl;
  }
  public get nameFormControl(){
    return this.signupForm.get('nameFormControl') as FormControl;
  }
  public get emailFormControl(){
    return this.signupForm.get('emailFormControl') as FormControl;
  }
  public get passwordFormControl(){
    return this.signupForm.get('passwordFormControl') as FormControl;
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.signupForm.valid){
      this.isLoading=true;
      console.log(this.signupForm.value);
      let url="https://calm-hamlet-62154.herokuapp.com/user/signup";
      let body={
          username:this.signupForm.value['nameFormControl'],
          firstName:this.signupForm.value['firstnameFormControl'],
          lastName:this.signupForm.value['lastnameFormControl'],
          email:this.signupForm.value['emailFormControl'],
          password:this.signupForm.value['passwordFormControl'],
      }
      console.log('body -> ',body);
      this.userService.Signup(url,body).subscribe(
        (r:any)=>{
            this.isLoading=false;
            if(r.responseCode==2){
            this.Error={
              error:{
                error:r.responseMessage
              }
            }
          }
          else{
            this.Error=null;
            console.log(r);
            this.isSignupSuccessfull=true;
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
    }

  }

}
