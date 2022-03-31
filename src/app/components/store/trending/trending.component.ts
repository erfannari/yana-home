import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  trandingItems: any[] = [
    {
      id: 1,
      image: '../../../../assets/images/optimizes-images/flowerPot.jpg',
      name: 'سبد رومیزی',
      size: '30 * 60',
      price: '135,000',
      discount: '12%',
    },
    {
      id: 2,
      image: '../../../../assets/images/optimizes-images/flower.jpg',
      name: 'کوسن ماندلا',
      size: '50 * 70',
      price: '240,000',
      discount: '6%',
    },
    {
      id: 3,
      image: '../../../../assets/images/optimizes-images/yalda3.jpg',
      name: 'سبد حصیری',
      size: '30 * 40',
      price: '98,000',
      discount: '17%',
    },
    {
      id: 4,
      image: '../../../../assets/images/optimizes-images/desk.jpg',
      name: 'میز کناری',
      size: '30 * 40',
      price: '98,000',
      discount: '17%',
    },
    {
      id: 5,
      image: '../../../../assets/images/optimizes-images/yalda2.jpg',
      name: 'کاور گلدان',
      size: '30 * 40',
      price: '98,000',
      discount: '17%',
    },
    {
      id: 6,
      image: '../../../../assets/images/optimizes-images/walling.jpg',
      name: 'آویز رز',
      size: '30 * 40',
      price: '98,000',
      discount: '17%',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
