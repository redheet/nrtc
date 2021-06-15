import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banner = [
    {
      img: "assets/images/banner-bg-1.1.jpg",
      subtitle: "IT Business Consulting",
      title: "Best IT Soluations <br>Provider Agency",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis"
    },
    {
      img: "assets/images/banner-bg-1.2.jpg",
      subtitle: "IT Business Consulting",
      title: "Best IT Soluations <br>Provider Agency",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis"
    },
    {
      img: "assets/images/banner-bg-1.3.jpg",
      subtitle: "IT Business Consulting",
      title: "Best IT Soluations <br>Provider Agency",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis"
    }
  ];
  settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          arrows: false
        }
      }
    ]
  };

  ngOnInit(): void {
  }

}
