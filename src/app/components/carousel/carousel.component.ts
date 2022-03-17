import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  imageSlider: any[] = [
    {
      id: 1,
      name: 'image 1',
      url: '../../../assets/images/optimizes-images/Curtain1.jpg',
    },
    {
      id: 2,
      name: 'image2',
      url: '../../../assets/images/optimizes-images/cushion.jpg',
    },
    {
      id: 3,
      name: 'image 3',
      url: '../../../assets/images/optimizes-images/flowerPot.jpg',
    },
    {
      id: 4,
      name: 'image 4',
      url: '../../../assets/images/optimizes-images/desk.jpg',
    },
    {
      id: 5,
      name: 'image 5',
      url: '../../../assets/images/optimizes-images/Curtain2.jpg',
    },
    {
      id: 5,
      name: 'image 5',
      url: '../../../assets/images/optimizes-images/pillow.jpg',
    },
    {
      id: 5,
      name: 'image 5',
      url: '../../../assets/images/optimizes-images/plate.jpg',
    },
    {
      id: 5,
      name: 'image 5',
      url: '../../../assets/images/optimizes-images/walling.jpg',
    },
  ];
  counter = 0;
  imgEl: any;
  slider(): any {
    this.imgEl = document.getElementById('imgEl');
    setInterval(() => {
      this.imgEl.src = this.imageSlider[this.counter].url;
      this.counter++;
      if (this.counter === this.imageSlider.length) {
        this.counter = 0;
      }
    }, 5000);
    clearInterval();
  }

  constructor() {}

  ngOnInit(): void {
    this.slider();
  }
}
