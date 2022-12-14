import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbar = [
    {
      id: 1,
      name: 'دسته بندی ها',
      iconUrl: '../../../assets/icons/header/hamburger-menu-svgrepo-com.svg'
    },
    {
      id: 2,
      name: 'تخفیف ها و پیشنهاد ها',
      iconUrl: '../../../assets/icons/header/discount-svgrepo-com.svg'
    },
    {
      id: 3,
      name: 'شگفت انگیز ها',
      iconUrl: '../../../assets/icons/header/discount2.svg'
    },
    {
      id: 4,
      name: 'درباره ی یانا هوم',
      iconUrl: '../../../assets/icons/header/info-svgrepo-com.svg'
    },
    {
      id: 5,
      name: 'ورود / ثبت نام',
      iconUrl: '../../../assets/icons/header/user-svgrepo-com.svg'
    },
    {
      id: 6,
      name: 'سبد خرید',
      iconUrl: '../../../assets/icons/header/shopping-cart-svgrepo-com.svg'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
