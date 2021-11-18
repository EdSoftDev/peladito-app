import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
// TODO Mari: Pasar las variables (afectacionIGV) cuando este listo el store
export class VariablesGlobalesInterfaz {
  public afectacionIGV: any = [
    { codigo: "10", nombre: "Gravado" },
    { codigo: "11", nombre: "Gravado Retiro por premio" },
    { codigo: "12", nombre: "Gravado Retiro por donación" },
    { codigo: "13", nombre: "Gravado Retiro" },
    { codigo: "14", nombre: "Gravado Retiro por publicidad" },
    { codigo: "15", nombre: "Gravado Bonificaciones" },
    { codigo: "16", nombre: "Gravado Retiro por entrega a trabajadores" },
    { codigo: "17", nombre: "Gravado IVAP" },
    { codigo: "20", nombre: "Exonerado" },
    { codigo: "21", nombre: "Exonerado Transferencia Gratuita" },
    { codigo: "30", nombre: "Inafecto" },
    { codigo: "31", nombre: "Inafecto Retiro por Bonificación" },
    { codigo: "32", nombre: "Inafecto Retiro" },
    { codigo: "33", nombre: "Inafecto Retiro por Muestras Médicas" },
    { codigo: "34", nombre: "Inafecto Retiro por Convenio Colectivo" },
    { codigo: "35", nombre: "Inafecto Retiro por premio" },
    { codigo: "36", nombre: "Inafecto Retiro por publicidad" }
  ];

  public tiposExistencia: any = [
    { codigo: '01', descripcion: 'MERCADERÍA' },
    { codigo: '02', descripcion: 'PRODUCTO TERMINADO' },
    { codigo: '03', descripcion: 'MATERIAS PRIMAS Y AUXILIARES - MATERIALES' },
    { codigo: '04', descripcion: 'ENVASES Y EMBALAJES' },
    { codigo: '05', descripcion: 'SUMINISTROS DIVERSOS' },
    { codigo: '99', descripcion: 'OTROS (ESPECIFICAR)' }
  ];

  // Codigos de SUNAT
  public codigosDeUnidadDeMedida: any = [
    { codigo: '01', descripcion: 'KILOGRAMOS' },
    { codigo: '02', descripcion: 'LIBRAS' },
    { codigo: '03', descripcion: 'TONELADAS LARGAS' },
    { codigo: '04', descripcion: 'TONELADAS MÉTRICAS' },
    { codigo: '05', descripcion: 'TONELADAS CORTAS' },
    { codigo: '06', descripcion: 'GRAMOS' },
    { codigo: '07', descripcion: 'UNIDADES' },
    { codigo: '08', descripcion: 'LITROS' },
    { codigo: '09', descripcion: 'GALONES' },
    { codigo: '10', descripcion: 'BARRILES' },
    { codigo: '11', descripcion: 'LATAS' },
    { codigo: '12', descripcion: 'CAJAS' },
    { codigo: '13', descripcion: 'MILLARES' },
    { codigo: '14', descripcion: 'METROS CÚBICOS' },
    { codigo: '15', descripcion: 'METROS' },
    { codigo: '99', descripcion: 'OTROS (ESPECIFICAR)' }
  ];
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


