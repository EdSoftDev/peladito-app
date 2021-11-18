import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelGeneralComponent } from '../configuracion-general/panel-general/panel-general.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionGeneralRoutingModule { }
