import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  showPassword(): any {
    const passInput: any = document.getElementById('password');
    const reapetPassInput: any = document.getElementById('reapet-password');

    if (passInput.type && reapetPassInput.type === 'password') {
      passInput.type = 'text';
      reapetPassInput.type = 'text';
    } else {
      passInput.type = 'password';
      reapetPassInput.type = 'password';
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
