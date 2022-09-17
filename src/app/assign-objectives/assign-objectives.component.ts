import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-assign-objectives',
  templateUrl: './assign-objectives.component.html',
  styleUrls: ['./assign-objectives.component.css']
})
export class AssignObjectivesComponent implements OnInit {

  isLoading:any=false;
  data:any=[];
  resultsLength:number;

  constructor(public router: Router, public dialog: MatDialog,private storageService:LocalstorageService,public userService: UserService) { }

  ngOnInit(): void {

    this.isLoading = true;
    let url = GlobalComponent.apiUrl + "priority/getPriority";
    let body = {
      stakeholderId: this.storageService.GetUserStakeholder.id
    }
    console.log("body =>"+body.stakeholderId);
    this.userService.getData(url, body).subscribe(
      (r: any) => {

        this.data = r.responseBody;
        this.resultsLength = r.length;
        console.log(r.responseBody);
        this.isLoading = false;
        this.data = new MatTableDataSource(r.responseBody.setResponseDTOS);
        // this.data.paginator = this.paginator;
        // this.data.sort = this.sort;

      })

  }

}
