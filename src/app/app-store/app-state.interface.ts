import { IAuthState } from './../authentication/models/auth-state';

export interface AppState {
  auth: IAuthState; // Include the AuthState in AppState
  // Other state slices if needed
}
