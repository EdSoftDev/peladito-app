import { Component, OnInit } from '@angular/core';
import { MatDialog,} from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { EditGestionUsuariosComponent } from '../1.1_edit-gestion-usuarios/edit-gestion-usuarios.component';
import { ConfirmationDialogComponent } from '../../shared-app-interfaces/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  //Variable para creación de columnas en el mat-table
  displayedColumns: string[] = [
    'id',
    'nombres',
    'apellidos',
    'email',
    'password',
    'acciones'
  ];
  //Variable Users a llenar desde los services
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
      this.users = users;
    })
  }

  openModalCreate() {
    this.dialog.open(EditGestionUsuariosComponent, {
      width: '500px',
      disableClose: false,
      panelClass: 'myapp-no-padding-dialog'
    }).afterClosed().subscribe(result => {
      this.fetchProducts();
    });
  }

  openModalEdit(user: User[]) {
    const dialogRef = this.dialog.open(EditGestionUsuariosComponent, {
      width: '500px',
      data: user,
      disableClose: false,
      panelClass: 'myapp-no-padding-dialog'
    }).afterClosed().subscribe(result => {
      this.fetchProducts();
    });
  }

  openModalDelete(id: string): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: `¿Seguro que desea eliminar el usuario`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.userService.deleteUser(id)
          .subscribe(users=> {
            alert("¡Eliminado correctamente!");
            this.fetchProducts();
          })
        } else {
        }
      });
  }
}
