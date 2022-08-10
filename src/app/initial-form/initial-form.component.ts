import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {

  isLoading:boolean=false;
  constructor(public router:Router, public userService:UserService) { }

  ngOnInit(): void {
    this.isLoading=true;
      let url="https://calm-hamlet-62154.herokuapp.com/user/get";
      this.userService.Awake(url).subscribe(
        (r:any)=>{
          this.isLoading=false;
          console.log('r => ',r);
          this.router.navigate(['/']);
        },
        e=>{
          this.ngOnInit();
        }
      )
  }

  onLoginClick(){

  }
  
  onSignupClick(){
    
  }
}
