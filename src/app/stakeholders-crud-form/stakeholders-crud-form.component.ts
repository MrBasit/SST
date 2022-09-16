import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { DeleteSetPopUpComponent } from '../delete-set-pop-up/delete-set-pop-up.component';
import { LocalstorageService, UserData } from '../localstorage.service';
import { SetViewComponentPopUpComponent } from '../set-view-component-pop-up/set-view-component-pop-up.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-stakeholders-crud-form',
  templateUrl: './stakeholders-crud-form.component.html',
  styleUrls: ['./stakeholders-crud-form.component.css']
})
export class StakeholdersCrudFormComponent implements OnInit {


  constructor(public router: Router, public dialog: MatDialog, public storageService: LocalstorageService, public userService: UserService) {
    this.CurrentUser = this.storageService.GetCurrentuesr;
  }
  CurrentUser: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'description', 'Objectives', 'Edit', 'View', 'Delete'];
  resultsLength = 0;
  isLoading: boolean = false;
  isView: Boolean = false;
  pageSize: number = 2;
  isEdit: boolean = false;
  public data: MatTableDataSource<UserData>;


  ngOnInit(): void {
    this.isLoading = true;
    let url = GlobalComponent.apiUrl + "set/getSets";
    let body = {
      userId: this.CurrentUser.id
    }
    this.userService.GetSets(url, body).subscribe(
      (r: any) => {

        this.data = r.responseBody.setResponseDTOS;
        this.resultsLength = r.length;
        console.log(r.responseBody.setResponseDTOS);
        this.isLoading = false;
        this.data = new MatTableDataSource(r.responseBody.setResponseDTOS);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;

      }
    )
  }

  viewData(data: any) {


    this.storageService.SetUserSet = data;

    let ViewDialogRef = this.dialog.open(SetViewComponentPopUpComponent, {
      data: data
    })
    ViewDialogRef.afterOpened().subscribe(r => {
      r = data;
      //console.log(r);
    })


  }

  onDelete(data: any) {

    console.log(data);

    let DeleteDialogRef = this.dialog.open(DeleteSetPopUpComponent, {
      data: null
    })
    DeleteDialogRef.afterClosed().subscribe(r => {
      if (r) {
        this.isLoading = true;
        let url = GlobalComponent.apiUrl + 'set/deleteSet';
        console.log('id: ', data.row.id);
        let body = {
          setId: data.row.id
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

  onEdit(data: any) {
    let setData = {
      userId: this.CurrentUser.id,
      id: data.row.id,
      name: data.row.name,
      description: data.row.description
    };
    console.log(setData);
    this.storageService.SetUserSet = setData;
    this.router.navigate(['/editSet']);

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
