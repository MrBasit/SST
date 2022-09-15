import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-set-view-component-pop-up',
  templateUrl: './set-view-component-pop-up.component.html',
  styleUrls: ['./set-view-component-pop-up.component.css']
})
export class SetViewComponentPopUpComponent implements OnInit {

  constructor(private storageService:LocalstorageService) { }

  setInfo:any={}
  isActive:boolean=false;

  ngOnInit(): void {

    this.setInfo=this.storageService.GetUserSet;
    

  }

}
