import {Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
// import { AuthEffects, authReducer } from './Store';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthEffects } from './store/effects/auth.effects';
import { authReducer } from './store/reducers/auth.reducer';

// export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, './assets/i18n/authentication/', '.json');
// }

export const AuthenticationRouting: Routes =  [
  {
    path: '',
    component: AuthenticationComponent,
    providers: [
      importProvidersFrom(
        // alternative to `StoreModule.forFeature`
        StoreModule.forFeature('auth', authReducer),
        // alternative to `EffectsModule.forFeature`
        EffectsModule.forFeature([AuthEffects]),

        // Translate Module
        // TranslateModule.forChild({
        //   defaultLanguage: 'en',
        //   loader: {
        //       provide: TranslateLoader,
        //       useFactory: createTranslateLoader,
        //       deps: [HttpClient],
        //     },
        //   }),
      )
    ],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/login/login.component').then(x => x.LoginComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./components/forgot-password/forgot-password.component').then(x => x.ForgotPasswordComponent)
      },
      {
        path: 'otp',
        loadComponent: () => import('./components/otp/otp.component').then(x => x.OTPComponent)
      },
      {
        path: 'reset/:code',
        loadComponent: () => import('./components/reset-password/reset-password.component').then(x => x.ResetPasswordComponent)
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  },
];


