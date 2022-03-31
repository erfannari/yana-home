import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: any[] = [
    {
      Name: 'کوسن',
      Price: '125,000',
      Num: '1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
