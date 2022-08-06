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
  Signin(url:string,body:any){
    return this.http.post(url,body);
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
  DeleteAccount(url:string){
    return this.http.delete(url);
  }
}
