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

  public set SetUserSet(value:any){
    if(value==null){
      localStorage.removeItem('UserSet');
    }
    else{
      localStorage.setItem('UserSet',JSON.stringify(value))        
    }
  }
  public get GetUserSet(){
     let a = localStorage.getItem('UserSet') as string;
     return JSON.parse(a) as UserSet;
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
  "refreshToken": string,
  "isAdmin":Boolean
}
export interface UserData{
  "id": number,
  "email":string,
  "username": string,
  "firstName": string,
  "lastName": string,
  "isActive": string,
  "isAdmin":string
}

export interface UserSet{
  "id":string,
  "name":string,
  "description":string,
  "userId":string
}
