import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedores.models';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private server: string = 'http://localhost:8080/api/'
  private urlEndPoint: string = this.server + 'proveedores';

  constructor(
    private http:HttpClient
  ) { }

  getProveedores(){
    return this.http.get<Proveedor[]>(this.urlEndPoint);
  }
  createProveedores(proveedores : Proveedor){
    return this.http.post(this.urlEndPoint, proveedores);
  }
  editProveedores(proveedores : Proveedor){
    return this.http.put(`${this.urlEndPoint}/${proveedores}`,proveedores);
  }
  deleteProveedores(id:string){
    return this.http.delete(`${this.urlEndPoint}/${id}`);
  }

}
