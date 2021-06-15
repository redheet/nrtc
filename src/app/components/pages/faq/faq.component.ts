import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-2 bg_cover";
  ftbgimage = "assets/images/footer-bg.jpg";
  ftlogo = "assets/images/logo-1.1.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
