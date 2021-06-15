import { Component, OnInit } from '@angular/core';
import casepost from '../../../../data/cases/case.json';
import category from '../../../../data/cases/category.json';

@Component({
  selector: 'app-caseblock',
  templateUrl: './caseblock.component.html',
  styleUrls: ['./caseblock.component.css']
})
export class CaseblockComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public caseblock = casepost;
  public getCategory(items: string | any[]) {
    var elems = category.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
  }

}
