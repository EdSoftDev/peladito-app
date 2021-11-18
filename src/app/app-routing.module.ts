import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sistema',
    loadChildren: () => import('../app/app-interfaces/app-interfaces.module').then(m => m.AppInterfacesModule)
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
