import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/core/angular-material/angular-material.module';
import { PanelCardComponent } from './panel-card/panel-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    PanelCardComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule
  ],
  exports: [
    PanelCardComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedAppInterfacesModule { }
