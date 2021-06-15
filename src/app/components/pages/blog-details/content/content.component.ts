import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogpost from '../../../../data/blog/blog.json';
import blogcategory from '../../../../data/blog/category.json';
import blogtags from '../../../../data/blog/tags.json';
import authors from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public blogdetails = blogpost;
  public blogpost = blogpost;
  public tags = blogtags;
  public blogcategory = blogcategory;
  public authors = authors;
  public getCategory(items: string | any[]) {
    var elems = blogcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public setPost(id: any) {
    this.blogdetails = blogpost.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
