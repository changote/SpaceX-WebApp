import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormulariosComponent } from 'src/app/modales/formularios/formularios.component';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit{

  user: any;
  loading = true;

  constructor(private authService: AuthService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    console.log(this.user.gender);
  }

  modalFormularios(){
    this.dialog.open(FormulariosComponent, {
      data: this.user.email,
      height: 'auto',
      width: 'auto',
    });
  }

}
