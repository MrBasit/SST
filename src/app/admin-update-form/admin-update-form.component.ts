import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';
import { GlobalComponent } from 'src/global-component';

@Component({
  selector: 'app-admin-update-form',
  templateUrl: './admin-update-form.component.html',
  styleUrls: ['./admin-update-form.component.css']
})
export class AdminUpdateFormComponent implements OnInit {

  isLoading:boolean=false;
  Error:any=null;
  regex:any=null;
  isActive:boolean=false;
  passwordType:string="password";
  username:string="";
  
  data:any;
  constructor(
    public route:ActivatedRoute,
    public router:Router,
    public userService:UserService,
    public storageService:LocalstorageService
  ){}
  
  
  updateAccountForm=new FormGroup({
    firstnameFormControl:new FormControl('',[Validators.required]),
    lastnameFormControl:new FormControl('',[Validators.required]),
    nameFormControl:new FormControl('',[Validators.required]),
    emailFormControl:new FormControl('',[Validators.pattern(this.regex=new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'))]),
    passwordFormControl:new FormControl('',[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$')]),

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

  public get passwordFormControl(){
    return this.updateAccountForm.get('passwordFormControl') as FormControl;
  }
  ngOnInit(): void {
    
    console.log(history.state);
    
    this.data=history.state;
      this.nameFormControl.setValue(this.data.row.username);
      this.firstnameFormControl.setValue(this.data.row.firstName);
      this.lastnameFormControl.setValue(this.data.row.lastName)
      this.emailFormControl.setValue(this.data.row.email)
    if (this.data.row.isActive=="Active") {
      this.isActive=true;
    }else{
      this.isActive=false;
    }
  }

  changeVisible(){

    if (this.passwordType=="password") {
        this.passwordType="text";
    }else{
      this.passwordType="password";
    }
  }


  onSubmit(){
    this.username=this.updateAccountForm.value['nameFormControl'];
    this.username=this.username.trim();
    this.isLoading=true;
    if(this.updateAccountForm.valid){
      let url=GlobalComponent.apiUrl+"admin/update";
      let body={
          id:this.data.row.id,
          username:this.username,
          firstName:this.updateAccountForm.value['firstnameFormControl'],
          lastName:this.updateAccountForm.value['lastnameFormControl'],
          email:this.updateAccountForm.value['emailFormControl'],
          isActive:this.isActive,
          password:this.updateAccountForm.value['passwordFormControl'],
      }
      console.log('body -> ',body);
      this.userService.UpdateAccount(url,body).subscribe(
        (r:any)=>{
          this.isLoading=false;
          if(r.responseCode==1){
            console.log(r);
            
            this.router.navigate(['/edituser']);
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

}
