import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-objective-view-pop-up',
  templateUrl: './objective-view-pop-up.component.html',
  styleUrls: ['./objective-view-pop-up.component.css']
})
export class ObjectiveViewPopUpComponent implements OnInit {

  constructor(private storageService:LocalstorageService) { }
  setInfo:any={};

  ngOnInit(): void {

    this.setInfo=this.storageService.GetUserObjective;

  }

}
