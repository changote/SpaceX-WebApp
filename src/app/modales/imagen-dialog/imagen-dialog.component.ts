import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-imagen-dialog',
  templateUrl: './imagen-dialog.component.html',
  styleUrls: ['./imagen-dialog.component.css']
})
export class ImagenDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
