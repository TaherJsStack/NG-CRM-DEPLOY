import { IFUllAuthDummy } from './../../models/full-auth-dummy.interface';

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

import { IAuthDummy, IAuthState } from './../../models';

export const initialState: IAuthState = {
  isAuthenticated: false,
  fullUserData: {} as IFUllAuthDummy,
  user: {} as IAuthDummy,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, isAuthenticated: true, user, error: null })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, isAuthenticated: false, user: {} as IAuthDummy, error })),

  on(AuthActions.refreshTokenSuccess, (state, { user }) => ({ ...state, isAuthenticated: true, user, error: null })),
  on(AuthActions.refreshTokenFailure, (state, { error }) => ({ ...state, isAuthenticated: false, user: {} as IAuthDummy, error })),

  on(AuthActions.autoLogin, (state,{ user }) => ({ ...state, isAuthenticated: true, user })),

  on(AuthActions.logoutSuccess, () => initialState),
  on(AuthActions.logoutFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.setUser, (state, { user }) => ({ ...state, user })),

  on(AuthActions.setFullUser, (state, { fullUserData }) => ({ ...state, fullUserData })),

);
