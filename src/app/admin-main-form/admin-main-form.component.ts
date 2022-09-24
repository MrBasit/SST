import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { AdminViewUserPopupComponent } from '../admin-view-user-popup/admin-view-user-popup.component';
import { DeleteAccountPopupComponent } from '../delete-account-popup/delete-account-popup.component';
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

  displayedColumns: string[] = ['username','firstName', 'lastName', 'email','isActive','Edit','View','Delete'];
  menuItems:any[]=[
                    {link:'/edituser',name:'Users'},
                    {link:'/adminEditObjective',name:'Objectives'},
                    {link:'/adminEditSet',name:'Sets'},
                    {link:'/adminEditStakeholder', name:'Stakeholders'}
                  ]
  resultsLength = 0;
  isLoading:boolean=false;
  isView:Boolean=false;
  pageSize:number=2;
  isEdit:boolean=false;
  public data:MatTableDataSource<UserData>;
  CurrentUser:any={};

  constructor(public userService:UserService,public router:Router,private storageService:LocalstorageService, public dialog:MatDialog) { 
    
  }
  
  ngOnInit(): void {
    this.CurrentUser = this.storageService.GetCurrentuesr;
    this.isLoading=true;
    let url=GlobalComponent.apiUrl+"admin/get";
    this.userService.Awake(url).subscribe(
      (r:any)=>{
       
        this.data=r;
        this.resultsLength=r.length;
        console.log(r);
        this.isLoading=false;
        this.data=new MatTableDataSource(r);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        this.menuItems.sort(this.compare);
        let type={isCrudSet:false}
        this.storageService.SetCrudType=type;
      }
    )
    

  }
  
  compare( a:any, b:any ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
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
  

  onDelete(){
    console.log(this.storageService.GetCurrentuesr.id);
    let DeleteDialogRef = this.dialog.open(DeleteAccountPopupComponent, {
      data: null
    })
    DeleteDialogRef.afterClosed().subscribe(r => {
      if (r) {
        this.isLoading = true;
        let url = GlobalComponent.apiUrl + 'user/deleteaccount';
        console.log('id: ', this.CurrentUser.id);
        this.userService.DeleteAccount(url, { id: this.CurrentUser.id }).subscribe(
          r => {
            this.storageService.SetCurrentUser = null;
            console.log(r),
              this.router.navigate(['/signin'])
          },
          e => {
            console.log(e);
          }
        )
      }
    })
  }
  
  onEdit(data:any){
   this.router.navigate(['/adminupdate'],{state:data});
  }

  goToUpdate(){

    let type={
      userType:'admin'
    }
    
    this.storageService.SetUserType=type;
    console.log(this.storageService.GetUserType);
  }

  Logout(){
    this.isLoading=true;
    let url=GlobalComponent.apiUrl+'user/logout';
    this.userService.SignOut(url);
    localStorage.clear();
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

  changeCrudSet() {
    
    let type={
      isCrudSet:true
    }
    let user={
      userType:'Admin'
    }
    this.storageService.SetUserType=user;
    this.storageService.SetCrudType=type;
    console.log(this.storageService.GetCrudType);
  }

}
