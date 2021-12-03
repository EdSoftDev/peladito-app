import { Component, OnInit } from '@angular/core';
import { MetricUnitService } from '../../configuration-general/service/metric-unit.service';
import { metricUnit } from '../models/metricUnit.model';
@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent implements OnInit {

  metricUnit :metricUnit[] =[];
 
  constructor(
      private metricUnitService : MetricUnitService
  ) { }

  ngOnInit(): void {
    this.fetchMetricUnit();
  }

  fetchMetricUnit(){
    // this.metricUnitService.getMetricUnit();
    // .subscribe(metricUnit => {
    //   this.metricUnit = metricUnit;
    //   }
    // )
  }

}
