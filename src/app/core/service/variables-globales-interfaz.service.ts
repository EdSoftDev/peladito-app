import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
// TODO Mari: Pasar las variables (afectacionIGV) cuando este listo el store
export class VariablesGlobalesInterfaz {

  // public tipoComision: any = ['Porcentaje', 'MontoFijo', 'Ninguno'];
  public tipoComision: any = [
    { nombre: 'Porcentaje', valor: 'Porcentaje' },
    { nombre: 'Monto fijo', valor: 'MontoFijo' },
    { nombre: 'Ninguno', valor: 'Ninguno' },
  ]

  // Valor actual de IGV
  public valorIGVActual: number = 0.18;
  public cantidadAModificar: number = 1;
  //#region Variables Globales para dialog
  public modoDialog: boolean = false;
  //#endregion
  constructor() { }

}


