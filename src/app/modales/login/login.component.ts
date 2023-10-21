import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  
  constructor(private dialogRef: MatDialogRef<LoginComponent>) {}
  
  closeModal() {
    this.dialogRef.close();
  }
}
