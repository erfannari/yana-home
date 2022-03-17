import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [
    {
      id: 1,
      categoriesName: 'کوسن',
      icon: '../../../../../assets/icons/categories/cushion-svgrepo-com.svg',
    },
    {
      id: 2,
      categoriesName: 'پرده',
      icon: '../../../../../assets/icons/categories/curtain-svgrepo-com.svg',
    },
    {
      id: 3,
      categoriesName: 'رو تختی',
      icon: '../../../../../assets/icons/categories/bed-svgrepo-com.svg',
    },
    {
      id: 4,
      categoriesName: 'رومیزی',
      icon: '../../../../../assets/icons/categories/tablecloth-svgrepo-com.svg',
    },
    {
      id: 5,
      categoriesName: ' میز تخت',
      icon: '../../../../../assets/icons/categories/bed-side-table-svgrepo-com.svg',
    },
    {
      id: 6,
      categoriesName: 'دستمال سفره',
      icon: '../../../../../assets/icons/categories/napkin-svgrepo-com.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
