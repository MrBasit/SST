import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }

  ngOnInit(): void {

  }

  onLoginClick(){

  }
  
  onSignupClick(){
    
  }
}
