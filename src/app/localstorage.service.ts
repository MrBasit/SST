import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  AdminAddType: any;

  constructor() {
  }

  public set SetCurrentUser(value: any) {
    if (value == null) {
      localStorage.removeItem('CurrentUser');
    }
    else {
      localStorage.setItem('CurrentUser', JSON.stringify(value))
    }
  }

  public set SetUserSet(value: any) {
    if (value == null) {
      localStorage.removeItem('UserSet');
    }
    else {
      localStorage.setItem('UserSet', JSON.stringify(value))
    }
  }

  public get GetAssignPriority() {
    let a = localStorage.getItem('AssignPriority') as string;
    return JSON.parse(a) as AssignPriority;
  }

  public set SetAssignPriority(value: any) {
    if (value == null) {
      localStorage.removeItem('AssignPriority');
    }
    else {
      localStorage.setItem('AssignPriority', JSON.stringify(value))
    }
  }


  public get GetUserStakeholder() {
    let a = localStorage.getItem('UserStakeholder') as string;
    return JSON.parse(a) as UserStakeholder;
  }

  public set SetUserStakeholder(value: any) {
    if (value == null) {
      localStorage.removeItem('UserStakeholder');
    }
    else {
      localStorage.setItem('UserStakeholder', JSON.stringify(value))
    }
  }


  public get GetUserSet() {
    let a = localStorage.getItem('UserSet') as string;
    return JSON.parse(a) as UserSet;
  }



  public get GetCurrentuesr() {
    let a = localStorage.getItem('CurrentUser') as string;
    return JSON.parse(a) as User;
  }

  Remove(key: string) {

  }

  public get GetUserObjective() {
    let a = localStorage.getItem('UserObjective') as string;
    return JSON.parse(a) as UserObjective;
  }

  public set SetUserObjective(value: any) {
    if (value == null) {
      localStorage.removeItem('UserObjective');
    }
    else {
      localStorage.setItem('UserObjective', JSON.stringify(value))
    }
  }

  public get GetAdminAddType() {
    let a = localStorage.getItem('AdminAddType') as string;
    return JSON.parse(a) as AdminAddType;
  }

  public set SetAdminAddType(value: any) {
    if (value == null) {
      localStorage.removeItem('AdminAddType');
    }
    else {
      localStorage.setItem('AdminAddType', JSON.stringify(value))
    }
  }


  public get GetAdminUpdateType() {
    let a = localStorage.getItem('AdminUpdateType') as string;
    return JSON.parse(a) as AdminUpdateType;
  }

  public set SetAdminUpdateType(value: any) {
    if (value == null) {
      localStorage.removeItem('AdminUpdateType');
    }
    else {
      localStorage.setItem('AdminUpdateType', JSON.stringify(value))
    }
  }

  public get GetUserType() {
    let a = localStorage.getItem('UserType') as string;
    return JSON.parse(a) as UserType;
  }

  public set SetUserType(value: any) {
    if (value == null) {
      localStorage.removeItem('UserType');
    }
    else {
      localStorage.setItem('UserType', JSON.stringify(value))
    }
  }

}
export interface User {
  "id": number,
  "email": string,
  "username": string,
  "firstName": string,
  "lastName": string,
  "accessToken": string,
  "refreshToken": string,
  "isAdmin": Boolean
}
export interface UserData {
  "id": number,
  "email": string,
  "username": string,
  "firstName": string,
  "lastName": string,
  "isActive": string,
  "isAdmin": string
}

export interface UserSet {
  "id": string,
  "name": string,
  "description": string,
  "userId": string
}

export interface UserStakeholder {
  "id": string,
  "name": string,
  "description": string
}

export interface UserObjective {
  "id": string,
  "name": string,
  "description": string
}

export interface AssignPriority {
  "id": string,
  "name": string,
  "priority": string
}

export interface AdminAddType {
  "addType": string
}

export interface AdminUpdateType {
  "updateType": string,
  "id": string,
  "name": string,
  "description": string
}

export interface UserType{
  "userType":string
}