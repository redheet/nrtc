import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cases from '../../../../data/cases/case.json';
import category from '../../../../data/cases/category.json';
import client from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public casedetails = cases;
  public getCategory(items: string | any[]) {
    var elems = category.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getClient(items: string | any[]) {
    var elems = client.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public setPost(id: any) {
    this.casedetails = cases.filter((item: { id: any; }) => { return item.id == id });
  }

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
