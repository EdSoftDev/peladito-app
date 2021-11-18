import { Component, Input,OnInit, ViewChild } from '@angular/core';
import { VariablesGlobalesInterfaz } from 'src/app/core/service/variables-globales-interfaz.service';
@Component({
  selector: 'app-app-form-header',
  templateUrl: './app-form-header.component.html',
  styleUrls: ['./app-form-header.component.css']
})
export class AppFormHeaderComponent implements OnInit {

  @Input () title = 'Aqui va el título de la cabecera';
  @Input () icon = 'Aqui va el icono de la cabecera';
  public modoDialog = this.interfaz.modoDialog;
  constructor(private interfaz: VariablesGlobalesInterfaz) { }

  ngOnInit(): void {
  }

}
