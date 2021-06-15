import { Component, OnInit } from '@angular/core';
import shopcategory from '../../../data/shop/category.json'
import shoptags from '../../../data/shop/tags.json'

@Component({
  selector: 'app-shopsidebar',
  templateUrl: './shopsidebar.component.html',
  styleUrls: ['./shopsidebar.component.css']
})
export class ShopsidebarComponent implements OnInit {

  constructor() { }
  public shopcategory = shopcategory;
  public shoptags = shoptags;

  ngOnInit(): void {
  }

}
