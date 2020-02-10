import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(this.id);
  }

  delete(){
    this.userService.deleteUser(this.id);
    alert('Removido com sucesso!');
    this._route.navigate(['/users']);
  }
  
  cancelar(){
    this._route.navigate(['/users']);
  }
}
