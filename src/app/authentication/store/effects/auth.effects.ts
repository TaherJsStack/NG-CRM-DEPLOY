
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../service/auth.service'; // Assuming AuthService for API calls

import * as AuthActions from '../actions/auth.actions'
import { IAuthDummy } from '../../models/auth-dummy.interface';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions, 
    private authService: AuthService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map((user: IAuthDummy) => {
            this.authService.currentUser = user;
            this.authService.appToken = user.token;
            return AuthActions.loginSuccess({ user });;
          }
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getUser),
      switchMap(() =>
        this.authService.getuserData().pipe(
          map((fullUserData) => {
            return AuthActions.setFullUser({fullUserData});
          }
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.refreshToken),
      switchMap(() =>
        this.authService.refreshToken().pipe(
          map((user) => {
            return AuthActions.loginSuccess({user});
          }
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );


}
