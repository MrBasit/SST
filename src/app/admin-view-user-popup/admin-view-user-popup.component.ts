import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalstorageService, UserData } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-view-user-popup',
  templateUrl: './admin-view-user-popup.component.html',
  styleUrls: ['./admin-view-user-popup.component.css']
})
export class AdminViewUserPopupComponent implements OnInit {

  isActive:boolean=false;

  userinfo:any;
  constructor(public userService:UserService,public router:Router,private storageService:LocalstorageService, 
    @Inject(MAT_DIALOG_DATA) public data:UserData) { 
      this.userinfo=this.data;
      if (this.userinfo.row.isActive=="Activated") {
        this.isActive=true;
      }
      console.log(this.userinfo);
  }
  ngOnInit(): void {
    
  }

}
