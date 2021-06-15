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

  ngOnInit(): void {
  }

}
