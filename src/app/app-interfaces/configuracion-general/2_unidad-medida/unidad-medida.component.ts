import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetricUnitService } from '../services/metric-unit.service';
import { MetricUnit } from '../models/metric-unit.model';
import { ConfirmationDialogComponent } from '../../shared-app-interfaces/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent implements OnInit {

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
