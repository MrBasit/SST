import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/global-component';
import { DeleteAccountPopupComponent } from '../delete-account-popup/delete-account-popup.component';
import { LocalstorageService } from '../localstorage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog, public storageService: LocalstorageService, public userService: UserService) { }
  CurrentUser: any = {};


  ngOnInit(): void {
    this.CurrentUser = this.storageService.GetCurrentuesr;
  }
  isLoading: boolean = false;

  onSignoutClick() {
    this.isLoading = true;
    let url = GlobalComponent.apiUrl + 'user/logout';
    this.userService.SignOut(url);
    localStorage.clear();
    this.router.navigate(['/'])

  }

  onDeleteAccountClick() {
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

}
