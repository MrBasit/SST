import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { LocalstorageService, UserStakeholder } from '../localstorage.service';
import { StakeholderDeletePopUpComponent } from '../stakeholder-delete-pop-up/stakeholder-delete-pop-up.component';
import { StakeholderViewPopUpComponent } from '../stakeholder-view-pop-up/stakeholder-view-pop-up.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-edit-stakeholder',
  templateUrl: './admin-edit-stakeholder.component.html',
  styleUrls: ['./admin-edit-stakeholder.component.css']
})
export class AdminEditStakeholderComponent implements OnInit {


  constructor(public router: Router
    , public dialog: MatDialog
    , public storageService: LocalstorageService
    , public userService: UserService) {
    this.CurrentUser = this.storageService.GetCurrentuesr;
  }
  CurrentUser: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [];
  resultsLength = 0;
  isLoading: boolean = false;
  isView: Boolean = false;
  pageSize: number = 2;
  isEdit: boolean = false;
  public data: MatTableDataSource<UserStakeholder>;
  isCrudSet:boolean=false;


  ngOnInit(): void {
    this.isLoading = true;
    let url="";
    if(
      this.storageService.GetCrudType.isCrudSet){url = GlobalComponent.apiUrl + "admin/getSetObjectivesStakeholders";
      this.displayedColumns=['name', 'description','Set Name','SetId', 'Edit', 'View', 'Delete'];
      this.isCrudSet=true;
    }
    else {
      url = GlobalComponent.apiUrl + "admin/getObjectivesStakeholders";
      this.displayedColumns=['name', 'description', 'Edit', 'View', 'Delete'];
      this.isCrudSet=false;
    }

    this.userService.getAdminData(url).subscribe(
      (r: any) => {

        this.data = r.getStakeholderResponseDTO.stakeholderResponseDTOS;
        this.resultsLength = r.length;
        console.log(this.data);
        this.isLoading = false;
        this.data = new MatTableDataSource(r.getStakeholderResponseDTO.stakeholderResponseDTOS);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;

      }
    )
  }

  goToStakeholderObjective() {

    let addType = {
      addType: "Stakeholder"
    }

    this.storageService.SetAdminAddType = addType;
    console.log(this.storageService.GetAdminAddType);
    this.router.navigate(['/adminAddStakeholderObjective']);
  }

  viewData(data: any) {

    console.log(data.row);
    this.storageService.SetUserStakeholder = data;


    let ViewDialogRef = this.dialog.open(StakeholderViewPopUpComponent, {
      data: data
    })
    ViewDialogRef.afterOpened().subscribe(r => {
      r = data;
      //console.log(r);
    })


  }

  onDelete(data: any) {

    console.log(data);

    let DeleteDialogRef = this.dialog.open(StakeholderDeletePopUpComponent, {
      data: null
    })
    DeleteDialogRef.afterClosed().subscribe(r => {
      if (r) {
        this.isLoading = true;
        let url="";
        if (this.isCrudSet) {
          url = GlobalComponent.apiUrl + 'admin/deleteSetStakeholderObjective';
        }
        else url = GlobalComponent.apiUrl + 'admin/deleteStakeholderObjective';
        console.log('id: ', data.row.id);
        let body = {
          deleteType: "Stakeholder",
          id: data.row.id
        }
        this.userService.DeleteAccount(url, body).subscribe(
          (r: any) => {
            console.log(r),
              this.ngOnInit();
          },
          (e: any) => {
            console.log(e);
          }
        )
      }
    })

  }

  goToAssignObjective(data: any) {
    this.storageService.SetUserStakeholder = data.row;
    console.log(this.storageService.GetUserStakeholder);
    console.log(this.storageService.GetCurrentuesr);
    console.log(this.storageService.GetUserObjective);
  }

  onEdit(data: any) {
    let setData = {
      updateType: 'Stakeholder',
      id: data.row.id,
      name: data.row.name,
      description: data.row.description,
      setId:data.row.setId
    };
    console.log(setData);
    this.storageService.SetAdminUpdateType = setData;
    this.router.navigate(['/adminUpdateStakeholderObjective']);

  }

  changeView() {
    if (this.isView) {
      this.isView = false;
      console.log(this.isView);

    } else {
      this.isView = true;
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
