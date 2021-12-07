import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { metricUnit } from '../models/metricUnit.model';

@Injectable({
  providedIn: 'root'
})
export class MetricUnitService {
  private server:string = 'http://localhost:8080/api/'
  private urlEndPoint:string = this.server + 'metricUnits';

  constructor(
    private http:HttpClient
  ) { }

  getMetricUnit(){
    return this.http.get<metricUnit[]>(this.urlEndPoint);
  }

  createUser(metricUnit : metricUnit){
    return this.http.post(this.urlEndPoint, metricUnit);
  }

}
