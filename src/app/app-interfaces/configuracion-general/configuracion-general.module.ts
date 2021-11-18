import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/core/angular-material/angular-material.module';

import { ConfiguracionGeneralRoutingModule } from './configuracion-general-routing.module';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';
import { PanelGeneralComponent } from './panel-general/panel-general.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedAppInterfacesModule } from '../shared-app-interfaces/shared-app-interfaces.module';

@NgModule({
  declarations: [
    UnidadMedidaComponent,
    PanelGeneralComponent
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
