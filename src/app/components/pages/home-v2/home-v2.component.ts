import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v2',
  templateUrl: './home-v2.component.html',
  styleUrls: ['./home-v2.component.css']
})
export class HomeV2Component implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-2 bg_cover";
  ftbgimage = "assets/images/footer-bg.jpg";
  ftlogo = "assets/images/logo-1.1.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
