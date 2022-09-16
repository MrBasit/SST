import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-stakeholder-view-pop-up',
  templateUrl: './stakeholder-view-pop-up.component.html',
  styleUrls: ['./stakeholder-view-pop-up.component.css']
})
export class StakeholderViewPopUpComponent implements OnInit {

  constructor(private storageService:LocalstorageService) { }

  
  setInfo:any={}
  isActive:boolean=false;

  ngOnInit(): void {

    this.setInfo=this.storageService.GetUserStakeholder;

  }

}
