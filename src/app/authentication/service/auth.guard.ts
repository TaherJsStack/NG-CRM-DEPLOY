import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAuthState } from '../models';
import { isAuthenticated } from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<{"auth": IAuthState}>, private router: Router) {
    console.log('AuthGuard constructor');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(isAuthenticated), // Select isAuthenticated from the store
      tap(isAuthenticated => {
        console.log('isAuthenticated', isAuthenticated);
        if (!isAuthenticated) {
          this.router.navigate(['/authentication']); // Redirect to login page
        } 
      })
    );
  }
}
