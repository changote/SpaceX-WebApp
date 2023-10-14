import { Injectable } from '@angular/core';
//import { MatDialog } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // constructor(private dialog: MatDialog) {}

  // public mostrarExito(mensaje: string, titulo ? : string): any {
  //   let dialogRef =  this.dialog.open(ExitoComponent, {
  //     ariaLabel: "Modal éxito",
  //     width: "auto",
  //     maxWidth: "95vw",
  //     data: {
  //       mensaje: mensaje,
  //       titulo: titulo || "&Eacute;xito"
  //     }
  //   });
  //   setTimeout(() => { dialogRef.close(); }, 2000);
  // }

  // public mostrarError(mensaje: string, titulo ? : string, boton ? : string): any {
  //   return this.dialog.open(ErrorComponent, {
  //     ariaLabel: "Modal error",
  //     width: "auto",
  //     maxWidth: "95vw",
  //     data: {
  //       mensaje: mensaje,
  //       titulo: titulo || "Error",
  //       boton: boton || "Cerrar"
  //     }
  //   });
  // }

  // public mostrarAviso(mensaje: string, titulo ? : string): any {
  //   return this.dialog.open(AvisoComponent, {
  //     ariaLabel: "Modal aviso",
  //     width: "auto",
  //     maxWidth: "95vw",
  //     data: {
  //       mensaje: mensaje,
  //       titulo: titulo || "Aviso"
  //     }
  //   });
  // }

  // public mostrarConfirmacion(mensaje: string, titulo ? : string): any {
  //   return this.dialog.open(ConfirmacionComponent, {
  //     ariaLabel: "Modal confirmación",
  //     panelClass: 'confirmacion',
  //     width: "auto",
  //     maxWidth: "95vw",
  //     data: {
  //       mensaje: mensaje,
  //       titulo: titulo || "Confirmaci&oacute;n"
  //     }
  //   });
  // }

  // public mostrarInformacion(titulo : string, mensaje: string) {
  //   this.dialog.open(InformacionComponent, {
  //     ariaLabel: "Modal información",
  //     width: "auto",
  //     maxWidth: "95vw",
  //     data: {
  //       titulo: titulo,
  //       mensaje: mensaje        
  //     }
  //   });
  // }


}
