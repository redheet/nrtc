import { Component, OnInit } from '@angular/core';
import cases from '../../../../data/cases/case.json';
import categories from '../../../../data/cases/category.json';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor() { }
  public case = cases;
  public category = categories;
  public getCategory(items: string | any[]) {
    var elems = categories.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  };
  settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
    speed: 1500,
    slidesToShow: 4,
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
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  ngOnInit(): void {
  }

}
