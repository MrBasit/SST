import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminViewUserPopupComponent } from '../admin-view-user-popup/admin-view-user-popup.component';
import { DeleteAccountPopupComponent } from '../delete-account-popup/delete-account-popup.component';
import { LocalstorageService, UserData } from '../localstorage.service';
import { UserService } from '../user.service';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-admin-crud-user-form',
  templateUrl: './admin-crud-user-form.component.html',
  styleUrls: ['./admin-crud-user-form.component.css']
})
export class AdminCrudUserFormComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['username','firstName', 'lastName', 'email','accounttype','isActive','Edit','View','Delete'];
  resultsLength = 0;
  isLoading:boolean=false;
  isView:Boolean=false;
  pageSize:number=2;
  isEdit:boolean=false;
  public data:MatTableDataSource<UserData>;
  
  constructor(public userService:UserService,public router:Router,private storageService:LocalstorageService, public dialog:MatDialog) { 
    
  }
  
  ngOnInit(): void {
    this.isLoading=true;
    let url="https://calm-hamlet-62154.herokuapp.com/user/get";
    this.userService.Awake(url).subscribe(
      (r:any)=>{
       
        this.data=r;
        this.resultsLength=r.length;
        //console.log(r);
        this.isLoading=false;
        this.data=new MatTableDataSource(r);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        for (let index = 0; index < this.data.data.length; index++) {
          const element = this.data.data[index];
          
          if (element.isActive.toString()=="true") {
            this.data.data[index].isActive="Active"  
          }else{
            this.data.data[index].isActive="Not Active"
          }

          if (element.isAdmin.toString()=="true") {
            this.data.data[index].isAdmin="Admin"
          }else{
            this.data.data[index].isAdmin="User"
          }

        }
      }
    )

    

  }
  
  viewData(data:any){
    let ViewDialogRef=this.dialog.open(AdminViewUserPopupComponent,{
      data:data
    })
    ViewDialogRef.afterOpened().subscribe(r=>{
      r=data;
      //console.log(r);
    })
    
  }
  

  onDelete(data:any){
    console.log(data);
    
    let DeleteDialogRef = this.dialog.open(DeleteAccountPopupComponent,{
      data:null
    })
    DeleteDialogRef.afterClosed().subscribe(r=>{
      if(r){
        this.isLoading=true;
        let url='https://calm-hamlet-62154.herokuapp.com/user/deleteaccount';
        console.log('id: ',data.row.id);
        this.userService.DeleteAccount(url,{id:data.row.id}).subscribe(
          r=>{
            console.log(r),
            this.ngOnInit();
          },
          e=>{
            console.log(e);
          }
        )
      }
    })
  }
  
  onEdit(data:any){
   this.router.navigate(['/adminupdate'],{state:data});
  }

  Logout(){
    this.isLoading=true;
    let url='http://localhost:5000/user/logout';
    this.userService.SignOut(url);
    this.storageService.SetCurrentUser=null;
    this.router.navigate(['/'])
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
