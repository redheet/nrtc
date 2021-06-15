import { Component, OnInit } from '@angular/core';
import team from '../../../../data/team.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  public teamblock = team;
  // 
  settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]
  };

  ngOnInit(): void {
  }

}
