import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-state.interface'; // Import your AppState interface
import { authReducer } from '../authentication/store/reducers/auth.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  // Other reducers if needed
};
