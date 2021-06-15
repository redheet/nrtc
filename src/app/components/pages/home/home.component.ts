import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-2 footer-area-1 bg_cover";
  ftbgimage = "assets/images/footer-bg.jpg";
  ftlogo = "assets/images/logo-1.1.png";
  ftshape = "d-none";


  ngOnInit(): void {
  }

}
