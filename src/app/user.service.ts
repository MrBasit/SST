import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  Autorization="";
  constructor(public http:HttpClient,public storageService:LocalstorageService) { }
  Signup(url:string,body:any){
    return this.http.post(url,body);
  }
  CreateUser(url:string,body:any){
    this.Autorization=this.storageService.GetCurrentuesr.accessToken;
    let header = new HttpHeaders(
      {'Authorization':'Bearer '+this.Autorization}
    );
    let options = {
      headers:header
    }
    return this.http.post(url,body,options);
  }
  Signin(url:string,body:any){
    return this.http.post(url,body);
  }
  Awake(url:string){
    return this.http.get(url);
  }
  ChangePassword(url:string,body:{}){
    this.Autorization=this.storageService.GetCurrentuesr.accessToken;
    let header = new HttpHeaders(
      {'Authorization':'Bearer '+this.Autorization}
    );
    let options = {
      headers:header
    }
    return this.http.put(url,body,options);
  }

  ForgotPassword(url:string,body:{}){
    
    return this.http.put(url,body);
  }

  ChangeForgotPassword(url:string,body:{}){
    
    return this.http.put(url,body);
  }


  UpdateAccount(url:string,body:{}){
    this.Autorization=this.storageService.GetCurrentuesr.accessToken;
    let header = new HttpHeaders(
      {'Authorization':'Bearer '+this.Autorization}
    );
    let options = {
      headers:header
    }
    return this.http.put(url,body,options);
  }
  DeleteAccount(url:string,reqbody:any){
    this.Autorization=this.storageService.GetCurrentuesr.accessToken;
    let header = new HttpHeaders(
      {'Authorization':'Bearer '+this.Autorization}
    );
    let options = {
      headers:header,
      body:reqbody
    }
    return this.http.delete(url,options);
  }

  GetSets(url:string,body:{}){
    this.Autorization=this.storageService.GetCurrentuesr.accessToken;
    let header = new HttpHeaders(
      {'Authorization':'Bearer '+this.Autorization,
      'Content-Type': 'application/json'  
    }
    );
    let options = {
      headers:header
    }
    return this.http.post(url,body,options);
  }

  SignOut(url:string){
    this.Autorization=this.storageService.GetCurrentuesr.accessToken;
    let header = new HttpHeaders(
      {'Authorization':'Bearer '+this.Autorization}
    );
    let options = {
      headers:header
    }
    return this.http.get(url,options);
  }

  
}
