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
      iconUrl: '../../../assets/icons/header/hamburger-menu-svgrepo-com.svg',
      navRoute: "/login"

    },
    {
      id: 2,
      name: 'تخفیف ها و پیشنهاد ها',
      iconUrl: '../../../assets/icons/header/discount-svgrepo-com.svg',
      navRoute: "/login"

    },
    {
      id: 3,
      name: 'شگفت انگیز ها',
      iconUrl: '../../../assets/icons/header/discount2.svg',
      navRoute: "/login"

    },
    {
      id: 4,
      name: 'درباره ی یانا هوم',
      iconUrl: '../../../assets/icons/header/info-svgrepo-com.svg',
      navRoute: "/login"

    },
    {
      id: 5,
      name: 'ورود / ثبت نام',
      iconUrl: '../../../assets/icons/header/user-svgrepo-com.svg',
      
      navRoute: "/login"
    },
    {
      id: 6,
      name: 'سبد خرید',
      iconUrl: '../../../assets/icons/header/shopping-cart-svgrepo-com.svg',
      navRoute: "/shoppingCart"

    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
