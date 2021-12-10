import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetricUnitService } from '../services/metric-unit.service';
import { MetricUnit } from '../models/metric-unit.model';
import { ConfirmationDialogComponent } from '../../shared-app-interfaces/confirmation-dialog/confirmation-dialog.component';
import { EditUnidadMedidaComponent } from '../2.1_edit-unidad-medida/edit-unidad-medida.component';
@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent implements OnInit {

  //Variable para creación de columnas en el mat-table
  displayedColumns: string[] = [
    'id',
    'nombres',
    'descripcion',
    'acciones'
  ];

  //Variable metricUnits a llenar desde los services
  metricUnits :MetricUnit[] = [];

  constructor(
      private metricUnitService : MetricUnitService,
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchMetricUnits();
  }

  fetchMetricUnits(){
    this.metricUnitService.getMetricUnits()
    .subscribe(metricUnits=> {
      this.metricUnits = metricUnits;

    })
  }

  openModalCreate() {
    this.dialog.open(EditUnidadMedidaComponent, {
      width: '500px',
      disableClose: false,
      panelClass: 'myapp-no-padding-dialog'
    }).afterClosed().subscribe(result => {
      this.fetchMetricUnits();
    });
  }

  openModalDelete(id:string): void{
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: 'Hola, ¿Seguro que deseas eliminar el usuario?'
      })
      .afterClosed()
      .subscribe((confirmado: Boolean)=>{
        if(confirmado){
          this.metricUnitService.deleteMetricUnit(id)
          .subscribe(users=> {
            alert("Eliminado correctamente");
            this.fetchMetricUnits();
          })
        }else{

          }
        }
      );
  }

}
