import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { DeleteSetPopUpComponent } from '../delete-set-pop-up/delete-set-pop-up.component';
import { LocalstorageService, UserObjective, UserStakeholder } from '../localstorage.service';
import { ObjectiveDeletePopUpComponent } from '../objective-delete-pop-up/objective-delete-pop-up.component';
import { ObjectiveViewPopUpComponent } from '../objective-view-pop-up/objective-view-pop-up.component';
import { StakeholderViewPopUpComponent } from '../stakeholder-view-pop-up/stakeholder-view-pop-up.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-objectives-crud-form',
  templateUrl: './objectives-crud-form.component.html',
  styleUrls: ['./objectives-crud-form.component.css']
})
export class ObjectivesCrudFormComponent implements OnInit {


  constructor(public router: Router, public dialog: MatDialog, public storageService: LocalstorageService, public userService: UserService) {
    this.CurrentUser = this.storageService.GetCurrentuesr;
  }
  CurrentUser: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'description', 'Edit', 'View', 'Delete'];
  resultsLength = 0;
  isLoading: boolean = false;
  isView: Boolean = false;
  pageSize: number = 2;
  isEdit: boolean = false;
  public data: MatTableDataSource<UserObjective>;


  ngOnInit(): void {
    this.isLoading = true;
    let url = GlobalComponent.apiUrl + "objective/getObjectives";
    let body = {
      setId: this.storageService.GetUserSet.id
    };
    console.log(body);
    this.userService.getData(url, body).subscribe(
      (r: any) => {

        this.data = r.responseBody.stakeholderResponseDTOS;
        this.resultsLength = r.length;
        console.log(this.data);
        this.isLoading = false;
        this.data = new MatTableDataSource(r.responseBody.objectiveResponseDTOS);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;

      }
    )
  }

  viewData(data: any) {

    console.log(data.row);
    this.storageService.SetUserObjective = data;
    

    let ViewDialogRef = this.dialog.open(ObjectiveViewPopUpComponent, {
      data: data
    })
    ViewDialogRef.afterOpened().subscribe(r => {
      r = data;
      //console.log(r);
    })


  }

  onDelete(data: any) {

    console.log(data);

    let DeleteDialogRef = this.dialog.open(ObjectiveDeletePopUpComponent, {
      data: null
    })
    DeleteDialogRef.afterClosed().subscribe(r => {
      if (r) {
        this.isLoading = true;
        let url = GlobalComponent.apiUrl + 'objective/deleteObjective';
        console.log('id: ', data.row.id);
        let body = {
          objectiveId: data.row.id
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
      setId: this.storageService.GetUserSet.id,
      id: data.row.id,
      name: data.row.name,
      description: data.row.description
    };
    console.log(setData);
    this.storageService.SetUserObjective = setData;
    this.router.navigate(['/editObjective']);

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
