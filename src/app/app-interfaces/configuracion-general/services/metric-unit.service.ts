import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetricUnit } from '../models/metric-unit.model';

@Injectable({
  providedIn: 'root'
})
export class MetricUnitService {

  private server:string = 'http://localhost:8080/api/'
  private urlEndPoint:string = this.server + 'metricUnits';

  constructor(
    private http:HttpClient
  ) { }

  getMetricUnits() {
    return this.http.get<MetricUnit[]>(this.urlEndPoint);
  }

  createMetricUnit(metricUnit : MetricUnit){
    return this.http.post(this.urlEndPoint, metricUnit);
  }
  editMetricUnit(metricUnit: MetricUnit){
      return this.http.put(`${this.urlEndPoint}/${metricUnit.id}`, metricUnit);
  }

  deleteMetricUnit(id: string){
    return this.http.delete(`${this.urlEndPoint}/${id}`);
  }

}
