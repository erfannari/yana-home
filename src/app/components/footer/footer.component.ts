import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  footerIcons: any[] = [
    {
      id: 1,
      iconImage: '../../../assets/icons/footer/delivery-man-svgrepo-com.svg',
      iconName: 'تحویل اکسپرس',
    },
    {
      id: 2,
      iconImage: '../../../assets/icons/footer/credit-card-svgrepo-com.svg',
      iconName: 'امکان پرداخت در محل',
    },
    {
      id: 3,
      iconImage: '../../../assets/icons/footer/24-hours-svgrepo-com.svg',
      iconName: 'پاسخگویی 24 ساعته',
    },
    {
      id: 4,
      iconImage: '../../../assets/icons/footer/guarantee-svgrepo-com.svg',
      iconName: 'گارانتی هفت روزه',
    },
    {
      id: 5,
      iconImage: '../../../assets/icons/footer/list-tick-svgrepo-com.svg',
      iconName: 'ضمانت اصل بودن کالا',
    },
  ];
  socialIcons: any[] = [
    {
      id: 1,
      socialicon: '../../../assets/icons/footer/youtube-svgrepo-com.svg',
      altName:'youtube'
    },
    {
      id: 2,
      socialicon: '../../../assets/icons/footer/linkedin-svgrepo-com.svg',
      altName:'linkedin'
    },
    {
      id: 3,
      socialicon: '../../../assets/icons/footer/twitter-svgrepo-com.svg',
      altName:'twitter'
    },
    {
      id: 4,
      socialicon: '../../../assets/icons/footer/instagram-svgrepo-com.svg',
      altName:'instagram'
    },
  ];
}
