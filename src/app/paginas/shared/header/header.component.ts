import { Component } from '@angular/core';
import { ModalService } from 'src/app/servicios/modal/modal.service';
import { LoginComponent } from '../../../modales/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuarioLogueado = false;

  constructor(private modalService: ModalService, private dialog: MatDialog){

  }
  modalLogin(){
    this.dialog.open(LoginComponent, {
      ariaLabel: "Modal iniciar sesión",
      width: "auto",
      maxWidth: "95vw"
    });
  }

}
