import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VariablesGlobalesInterfaz } from 'src/app/core/service/variables-globales-interfaz.service';
@Component({
  selector: 'app-panel-general',
  templateUrl: './panel-general.component.html',
  styleUrls: ['./panel-general.component.css']
})
export class PanelGeneralComponent implements OnInit {

  public listaAcciones = [
    {
      nombre: 'Gestión usuarios',
      icon: 'person',
      bgAzul: false,
      ruta: "../"
    },
    {
      nombre: 'Unidad de medida',
      icon: 'feed',
      bgAzul: false,
      ruta: "../"
    },
    {
      nombre: 'Materiales',
      icon: 'content_copy',
      bgAzul: false,
      ruta: "../"
    },
    {
      nombre: 'Proveedores',
      icon: 'people_alt',
      bgAzul: false,
      ruta: "../"
    }
  ];
  constructor(public dialog: MatDialog,
    private interfaz: VariablesGlobalesInterfaz) { }

  ngOnInit(): void {
  }

}