import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AbstractFormClass } from '../../../core/classes';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
})
export class ResetPasswordComponent extends AbstractFormClass implements OnInit {

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    super(formBuilder)
  }

  ngOnInit(): void {
    this.getActivatedRouteParams()
    this.initForm()
  }
  
  getActivatedRouteParams(): void {
    this.activatedRoute.params.subscribe(params => {
      let resetCode = params['code'];
      console.log('activatedRoute.queryParamMap resetCode ---> ', resetCode)
      // Now you can use this.resetCode to access the code parameter

      if (resetCode) {
        this.checkCodevalidity()
      }

    });
  }


  initForm(): void {
    this.form = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.validatePasswordStrength
      ]],
      confirmPassword:  new FormControl('', [Validators.required],)  
    },
    {
      validators: this.passwordMatchValidator
    }
    );
  }

  validatePasswordStrength(control: AbstractControl): { [key: string]: boolean } | null {
    const value: string = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);

    const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;

    return isValid ? null : { invalidPassword: true };
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
    
    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value === confirmPasswordControl.value) {
        confirmPasswordControl.setErrors(null);
      } else {
        confirmPasswordControl.setErrors({ mismatch: true });
      }
    }
  }

  checkCodevalidity(): void {
    // use HHTP request to check if code is valid
  }


  onSubmit(): void {
    if (this.form.invalid) {
      this.isSubmitted = true;
      this.showFormInputsValues(this.form)
      return
    }
    this.router.navigateByUrl('/modules');
  }



}
