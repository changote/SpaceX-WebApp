import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    MatTabsModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
