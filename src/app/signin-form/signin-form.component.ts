import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  constructor(public userService:UserService,public router:Router, public storageService:LocalstorageService) { }
  loginFormControl=new FormGroup({
    usernameFormControl:new FormControl('itechnician030@gmail.com',[Validators.required]),
    passwordFormControl:new FormControl('Aa@123456',[Validators.required])
  })
  public get usernameFormControl(){
    return this.loginFormControl.get('usernameFormControl') as FormControl;
  }
  public get passwordFormControl(){
    return this.loginFormControl.get('passwordFormControl') as FormControl;
  }
  ngOnInit(): void {
  }
  isLoading:boolean=false;
  Error:any=null;
  onSubmit(){
    if(this.loginFormControl.valid){
      this.isLoading=true;
      console.log(this.loginFormControl.value);
      let url="https://calm-hamlet-62154.herokuapp.com/user/login";
      let body={
          email:this.loginFormControl.value['usernameFormControl'],
          password:this.loginFormControl.value['passwordFormControl']
      }
      console.log('body -> ',body);
      this.userService.Signin(url,body).subscribe(
        (r:any)=>{
          this.isLoading=false;
          console.log('r => ',r);
          this.storageService.SetCurrentUser=r.responseBody;
          console.log(this.storageService.GetCurrentuesr);
          this.router.navigate(['/main']);
        },
        e=>{
          this.isLoading=false;
          console.log('error => ',e)
          this.Error=e;
        }
      )
    }
    else{
      console.log('form is invalid');
    }

  }
}
