import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AbstractFormClass } from '../../../core/classes';

import { TranslateModule } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as authActions from '../../store/actions/auth.actions';
import { IAuthDummy, IAuthState } from '../../models';

import { selectUser } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule
  ],
})
export class LoginComponent extends AbstractFormClass implements OnInit, OnDestroy {

  showPassword: boolean = false;

  authState$!: Observable<IAuthDummy>;
  authStateSubscription!: Subscription;

  constructor(
    formBuilder: FormBuilder,
    private store: Store<{"auth": IAuthState}>
  ) { 
    super(formBuilder);
    this.authState$ = this.store.pipe(select(selectUser));
  }
  
  ngOnInit() {
    this.subscribeAuthState();
  }

  initForm(){
    this.form = this.formBuilder.group({
      email:     new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', Validators.required),
    });
    

    // setTimeout(() => {
    //   this.unsetValidatorsForControl(["email", "password"]);
    // }, 2000)

  }

  onSubmit() {
    if (this.form.invalid) {
      this.isSubmitted = true;
      this.showFormInputsValues(this.form)
      return
    }
    this.login()
  }

  login() {
    this.store.dispatch(authActions.login({ username: 'kminchelle', password: '0lelplR' }));
  }

  subscribeAuthState(){

    this.authStateSubscription = this.store.pipe(select('auth')).subscribe({
      next: (authState) => {
        // Handle the next value, e.g., update UI
        console.log('Auth State:', authState);
      },
      error: (error) => {
        // Handle errors, if any
        console.error('Error:', error);
      },
      complete: () => {
        // Handle completion, if needed
        console.log('Subscription complete');
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from authState$ when the component is destroyed
    this.authStateSubscription.unsubscribe();
  }

}
