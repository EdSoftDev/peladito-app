import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/core/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

import { ConfiguracionGeneralRoutingModule } from './configuracion-general-routing.module';
import { PanelGeneralComponent } from './0_panel-general/panel-general.component';

import { GestionUsuariosComponent } from './1_gestion-usuarios/gestion-usuarios.component';
import { EditGestionUsuariosComponent } from './1.1_edit-gestion-usuarios/edit-gestion-usuarios.component';
import { UnidadMedidaComponent } from './2_unidad-medida/unidad-medida.component';
import { MaterialesComponent } from './3_materiales/materiales.component';
import { ProveedoresComponent } from './4_proveedores/proveedores.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { SharedAppInterfacesModule } from '../shared-app-interfaces/shared-app-interfaces.module';

@NgModule({
  declarations: [
    UnidadMedidaComponent,
    PanelGeneralComponent,
    MaterialesComponent,
    ProveedoresComponent,
    GestionUsuariosComponent,
    EditGestionUsuariosComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionGeneralRoutingModule,
    AngularMaterialModule,
    SharedModule,
    SharedAppInterfacesModule
  ]
})
export class ConfiguracionGeneralModule { }
