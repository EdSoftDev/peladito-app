import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/core/angular-material/angular-material.module';

import { AppInterfacesRoutingModule } from './app-interfaces-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppInterfacesRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class AppInterfacesModule { }
