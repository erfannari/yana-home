import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-categories',
  templateUrl: './inner-categories.component.html',
  styleUrls: ['./inner-categories.component.scss'],
})
export class InnerCategoriesComponent implements OnInit {
  
  innerCategories: any[] = [
    {
      id: 1,
      categoryName: 'Cushions',
      categoryDescription: `خودت را با بهترین ها به یک لحظه خوش دعوت کن`,
      image: '../../../../assets/images/optimizes-images/cushion2.jpg',
    },
    {
      id: 2,
      categoryName: 'Curtain',
      categoryDescription: "شما شاهکار زندگی خودتون هستید پس رسیدگی به روح نازنینتون رو فراموش نکنید",
      image: '../../../../assets/images/optimizes-images/Curtain1.jpg',
    },
    {
      id: 3,
      categoryName: 'Kitchen',
      categoryDescription: 'خودت را با بهترین ها به یک لحظه خوش دعوت کن',
      image: '../../../../assets/images/optimizes-images/plate.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
