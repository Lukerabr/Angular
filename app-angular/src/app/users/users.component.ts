import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.responseUsers =  this.userService.getUsers();
  }

}
