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
