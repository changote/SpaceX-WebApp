import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const autenticacionGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn();
  return isLoggedIn;
};
