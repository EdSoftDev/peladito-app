import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from '../app-interfaces/navbar/navbar.component';
const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: 'conf_gen',
        pathMatch: 'full',
      },
      {
        path: 'conf_gen',
        loadChildren: () => import('../app-interfaces/configuracion-general/configuracion-general.module').then(m => m.ConfiguracionGeneralModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppInterfacesRoutingModule { }
