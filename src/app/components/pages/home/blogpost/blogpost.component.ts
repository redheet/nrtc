import { Component, OnInit } from '@angular/core';
import blogpost from '../../../../data/blog/blog.json';
import authors from '../../../../data/team.json';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor() { }
  public blogblock = blogpost;
  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
  }

}
