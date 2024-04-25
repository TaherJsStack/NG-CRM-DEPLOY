import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from '../../models';

// Create a feature selector for the auth state
export const selectAuthState = createFeatureSelector<IAuthState>('auth');

// Create a selector to get only the user property from the auth state
export const selectUser = createSelector(
  selectAuthState,
  (authState: IAuthState) => authState.user
);

export const selectFullUserData = createSelector(
  selectAuthState,
  (authState: IAuthState) => authState.fullUserData
);

export const isAuthenticated = createSelector(
    selectAuthState,
    (authState: IAuthState) => authState.isAuthenticated
);
