import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { LocalstorageService, UserData } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-main-form',
  templateUrl: './admin-main-form.component.html',
  styleUrls: ['./admin-main-form.component.css']
})

export class AdminMainFormComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['First Name', 'Last Name', 'Username', 'Email','Account Activation','Edit','Delete'];
  resultsLength = 0;
  isLoading:boolean=false;
  isView:Boolean=false;
  pageSize:number=2;
  public data:MatTableDataSource<UserData>;
  
  constructor(public userService:UserService,public router:Router,private storageService:LocalstorageService) { 
    
  }
  
  ngOnInit(): void {
    this.isLoading=true;
    let url="https://calm-hamlet-62154.herokuapp.com/admin/get";
    this.userService.Awake(url).subscribe(
      (r:any)=>{
       
        this.data=r;
        this.resultsLength=r.length;
        console.log(r);
        this.isLoading=false;
        this.data=new MatTableDataSource(r);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        
      }
    )

  }

  onDelete(data:any){
    console.log(data);
  }
  onEdit(data:any){
    console.log(data);
  }
  

  changeView(){
    if (this.isView) {
      this.isView=false;
      console.log(this.isView);
      
    }else{
      this.isView=true;
      console.log(this.isView);
      
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

}
