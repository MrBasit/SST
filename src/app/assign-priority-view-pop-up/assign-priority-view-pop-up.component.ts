import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './../localstorage.service';

@Component({
  selector: 'app-assign-priority-view-pop-up',
  templateUrl: './assign-priority-view-pop-up.component.html',
  styleUrls: ['./assign-priority-view-pop-up.component.css']
})
export class AssignPriorityViewPopUpComponent implements OnInit {

  
  constructor(private storageService:LocalstorageService) { }

  
  setInfo:any={}
  isActive:boolean=false;

  ngOnInit(): void {

    this.setInfo=this.storageService.GetAssignPriority;

  }
}
