import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword(): any {
    const passInput: any = document.getElementById('password');
    if (passInput.type === 'password') {
      passInput.type = 'text';
    } else {
      passInput.type = 'password';
    }
  }
  constructor() {}

  userLogin = {
    email: '',
    password: '',
  };
  ngOnInit(): void {}

  userEntry () {}
}
