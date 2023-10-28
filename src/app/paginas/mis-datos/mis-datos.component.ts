import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit{

  user: any;
  loading = true;

  constructor(private authService: AuthService){
  }

  ngOnInit(): void {
    this.user = this.authService.getUser;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }


}
