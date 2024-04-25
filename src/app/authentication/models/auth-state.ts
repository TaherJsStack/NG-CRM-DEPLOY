import { IAuthDummy, IFUllAuthDummy } from ".";

export interface IAuthState {
    isAuthenticated: boolean;
    user: IAuthDummy;
    fullUserData: IFUllAuthDummy;
    error: any;
  }