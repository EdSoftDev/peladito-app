import { Component, OnInit } from '@angular/core';
import { MetricUnitService } from '../services/metric-unit.service';
import { MetricUnit } from '../models/metric-unit.model';
@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent implements OnInit {

  metricUnits :MetricUnit[] = [];

  constructor(
      private metricUnitService : MetricUnitService
  ) { }

  ngOnInit(): void {
    this.fetchMetricUnits();
  }

  fetchMetricUnits(){
    this.metricUnitService.getMetricUnits()
    .subscribe(metricUnits=> {
      this.metricUnits = metricUnits;
      console.log(metricUnits);
    })
  }

}
