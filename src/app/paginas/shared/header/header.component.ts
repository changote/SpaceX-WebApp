import { Component } from '@angular/core';
import { LoginComponent } from '../../../modales/login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/servicios/autenticacion/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioLogueado = false;
  currentURL: string = '';
  fragment: any = '';
  user:any;
  dialogRef!: MatDialogRef<LoginComponent>;

  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService){

  }
  modalLogin(){
    this.dialogRef = this.dialog.open(LoginComponent);
    LoginComponent.setDialogRef(this.dialogRef);
  }
  isTabActive(tabRoute: string): boolean {
    return this.currentURL === tabRoute;
  }
  ngOnInit() {
    this.currentURL = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentURL = event.url;
        this.fragment = this.router.parseUrl(event.url).fragment;
      }
    });
    this.usuarioLogueado = this.authService.isLoggedIn();
    const userData = localStorage.getItem('user');
    console.log(userData);
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  logout(){
    this.authService.logout();
    window.location.reload();
  }

}
