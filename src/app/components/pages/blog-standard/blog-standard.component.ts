import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-standard',
  templateUrl: './blog-standard.component.html',
  styleUrls: ['./blog-standard.component.css']
})
export class BlogStandardComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-2 bg_cover";
  ftbgimage = "assets/images/footer-bg.jpg";
  ftlogo = "assets/images/logo-1.1.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
