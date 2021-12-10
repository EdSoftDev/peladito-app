import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared-app-interfaces/confirmation-dialog/confirmation-dialog.component';
import { Proveedor } from '../models/proveedores.models';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores :Proveedor[] = [];

  constructor(
      private proveedorService : ProveedoresService,
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchProveedores();
  }

  fetchProveedores(){
      this.proveedorService.getProveedores()
      .subscribe(proveedores=>{
        this.proveedores = proveedores;

      })
  }

  openModalDelete(id:string):void{
    this.dialog
    .open(ConfirmationDialogComponent, {
      data: 'Hi, ¿Seguro que desea eliminar el usuario?'
    })
    .afterClosed()
    .subscribe((confirmado: boolean)=>{
      if(confirmado){
        this.proveedorService.deleteProveedores(id)
        .subscribe(users=>{
          alert("Eliminado correctamente");
          this.fetchProveedores();
        })
      }
    });
  }

}
