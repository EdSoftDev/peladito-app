import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material/angular-material.module';
import { AppFormHeaderComponent } from './app-form-header/app-form-header.component';

const componentsShare = [
  AppFormHeaderComponent
]

@NgModule({
  declarations: [
    AppFormHeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    componentsShare
  ]
})
export class SharedModule { }
