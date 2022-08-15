import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService, User } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-update-form',
  templateUrl: './admin-update-form.component.html',
  styleUrls: ['./admin-update-form.component.css']
})
export class AdminUpdateFormComponent implements OnInit {

  isLoading:boolean=false;
  Error:any=null;
  
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
    emailFormControl:new FormControl('',[Validators.required])
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
    
    console.log(history.state);
    
    this.data=history.state;
      this.nameFormControl.setValue(this.data.row.username);
      this.firstnameFormControl.setValue(this.data.row.firstName);
      this.lastnameFormControl.setValue(this.data.row.lastName)
      this.emailFormControl.setValue(this.data.row.email)
    
  }
  onSubmit(){
    this.isLoading=true;
    if(this.updateAccountForm.valid){
      let url="https://calm-hamlet-62154.herokuapp.com/admin/update";
      let body={
          id:this.data.row.id,
          username:this.updateAccountForm.value['nameFormControl'],
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
            
            this.router.navigate(['/adminmain']);
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

    }
    console.log('form -> ',this.updateAccountForm.value);
  
  }

}
