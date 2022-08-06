import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { 
  }

  public set SetCurrentUser(value:any){
    if(value==null){
      localStorage.removeItem('CurrentUser');
    }
    else{
      localStorage.setItem('CurrentUser',JSON.stringify(value))        
    }
  }
  
  public get GetCurrentuesr(){
     let a = localStorage.getItem('CurrentUser') as string;
     return JSON.parse(a) as User;
  }

  Remove(key:string){
    
  }
}
export interface User{
  "id": number,
  "email":string,
  "username": string,
  "firstName": string,
  "lastName": string,
  "accessToken": string,
  "refreshToken": string
}
