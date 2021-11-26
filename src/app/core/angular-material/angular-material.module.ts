import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';


const MaterialComponents = [
  MatDialogModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatTooltipModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatTabsModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatCardModule,
  MatBadgeModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTableModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
    CommonModule
  ],
  exports: [
    MaterialComponents
  ],
  entryComponents: []
})
export class AngularMaterialModule { }
