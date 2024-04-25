
import { createAction, props } from '@ngrx/store';
import { IAuthDummy } from '../../models/auth-dummy.interface';
import { IFUllAuthDummy } from '../../models/full-auth-dummy.interface';

export const login = createAction('[Auth] Login', props<{ username: string; password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: IAuthDummy}>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const refreshToken = createAction('[Auth] Refresh Token Success');
export const refreshTokenSuccess = createAction('[Auth] Refresh Token Success', props<{ user: IAuthDummy}>());
export const refreshTokenFailure = createAction('[Auth] Refresh Token Failure', props<{ error: any }>());

export const getUser = createAction('[Auth] Get User');
export const setFullUser = createAction('[Auth] SET Full User', props<{ fullUserData: IFUllAuthDummy}>());

export const autoLogin = createAction('[Auth] Auto Login', props<{ user: IAuthDummy }>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction('[Auth] Logout Failure', props<{ error: any }>());

export const setUser = createAction('[Auth] Set User', props<{ user: IAuthDummy }>());


