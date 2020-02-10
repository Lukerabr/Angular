import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: User = {
    id: '',
    data_nascimento: '',
    email: '',
    primeiro_nome: '',
    ultimo_nome: '',
    endereco: ''
  }

  response: User


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.response = this.userService.createUser(this.request);
  }
}
