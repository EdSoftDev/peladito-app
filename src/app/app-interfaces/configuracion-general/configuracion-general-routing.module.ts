import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelGeneralComponent } from './0_panel-general/panel-general.component';
import { UnidadMedidaComponent } from './2_unidad-medida/unidad-medida.component';
import { MaterialesComponent } from './3_materiales/materiales.component';
import { ProveedoresComponent } from './4_proveedores/proveedores.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full',
  },
  {
      path: 'inicio',
      component: PanelGeneralComponent
  },
  {
    path: 'unidad_medida',
    component: UnidadMedidaComponent
  },
  {
    path: 'materiales',
    component: MaterialesComponent
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionGeneralRoutingModule { }
