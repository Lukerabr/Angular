import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private url = "https://reqres.in/api/users";
  //userService: any;

  Users: User[] = [];

  constructor(private http: HttpClient) { }


  getUsers(): User[]{
    return this.Users;
  }

  createUser(request: User): User{
    request.id = '' + this.Users.length;
    this.Users[this.Users.length] = request;
     return request;
  }

  getUser(id: string): User{
     var idNum: number = Number(id);
     if(this.Users[idNum] != undefined)
      return this.Users[idNum];
    return undefined;
  }

  updateUser(id: string, request: User): User{
    var idNum: number = Number(id);
    this.Users[idNum] = request;
    return request;
  }
  
  deleteUser(id: string): any{
    var idNum: number = Number(id);
    this.Users[idNum] = undefined;
    return;
  }

}
