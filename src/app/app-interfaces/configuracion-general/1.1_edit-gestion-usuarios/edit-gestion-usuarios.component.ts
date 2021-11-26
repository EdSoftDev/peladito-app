import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-edit-gestion-usuarios',
  templateUrl: './edit-gestion-usuarios.component.html',
  styleUrls: ['./edit-gestion-usuarios.component.css']
})
export class EditGestionUsuariosComponent implements OnInit {
  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

  // createUser() {
  //   this.userService.createUser(this.user)
  //   .subscribe(user => {
  //   });
  // }
}
