import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        primeiro_Nome: res.data.primeiro_Nome,
        ultimo_Nome: res.data.ultimo_Nome,
        data_nascimento: '',
        endereco: '',
        email:''
      }
    })
  }

  update(){
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert('Atualizado em: ' + res.updatedAt + ' ' + 'Nome: ' + res.primeiro_Nome + ' ' + res.ultimo_Nome);
    });
  }

}
