import { Component } from '@angular/core';
import { AbstractFormClass } from '../../../core/classes';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
})
export class ForgotPasswordComponent extends AbstractFormClass {
  
  constructor(
    formBuilder: FormBuilder,
    private router: Router
  ) {
    super(formBuilder);
  }

  ngOnInit() { }

  initForm(){
    this.form = this.formBuilder.group({
      email:     new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.isSubmitted = true;
      this.showFormInputsValues(this.form)
      return
    }
    this.router.navigateByUrl('/authentication/otp');
  }

 
}
