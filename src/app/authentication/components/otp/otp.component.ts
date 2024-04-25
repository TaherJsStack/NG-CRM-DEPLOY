import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from  'ng-otp-input';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
  standalone: true,
  imports: [
    NgOtpInputModule,
    CommonModule,
    RouterModule,
    TranslateModule
  ],
})
export class OTPComponent implements OnInit {

  // sendOTPAfter: number = 5/9;
  sendOTPAfter: number = 5;

  OTPCode: string = '';

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    let timeDone = setInterval(() => {
      this.sendOTPAfter--
      if (this.sendOTPAfter == 0) {
        clearInterval(timeDone)
      }
    }, 1000);
  }

  onOtpChange(e: any) {
    console.log(e)
    this.OTPCode = e
  }


  onSubmit() {
    this.router.navigateByUrl(`/authentication/reset/${this.OTPCode}`)
  }



}
