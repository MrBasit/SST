import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sets-crud-form',
  templateUrl: './sets-crud-form.component.html',
  styleUrls: ['./sets-crud-form.component.css']
})
export class SetsCrudFormComponent implements OnInit {

  constructor(public router:Router, public dialog:MatDialog, public storageService:LocalstorageService,public userService:UserService) { }
  CurrentUser:any={};

  isLoading:boolean=false;

  ngOnInit(): void {
    this.CurrentUser = this.storageService.GetCurrentuesr;
    let body={
      userId:this.CurrentUser.id
  }
    let url=GlobalComponent.apiUrl+"set/getSets";
    console.log(this.CurrentUser.id);
      this.userService.GetSets(url,body).subscribe(
        (r:any)=>{
          
          this.isLoading=false;
          console.log('r => ',r);
          },
        e=>{
          console.log(e)
        }
      )
  }

}
