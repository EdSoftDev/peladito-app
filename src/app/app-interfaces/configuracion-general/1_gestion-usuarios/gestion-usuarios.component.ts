import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

import { EditGestionUsuariosComponent } from '../1.1_edit-gestion-usuarios/edit-gestion-usuarios.component';
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'nombres',
    'apellidos',
    'email',
    'password',
    'acciones'
  ];
  users: User[] = [];

  constructor(
    private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.userService.getUsers()
    .subscribe(users=> {
      console.log(users);
      this.users = users;
    })
  }

  openModalCreate() {
    this.dialog.open(EditGestionUsuariosComponent, {
      width: '500px',
      disableClose: false,
      panelClass: 'myapp-no-padding-dialog'
    });
  }
}
