import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
