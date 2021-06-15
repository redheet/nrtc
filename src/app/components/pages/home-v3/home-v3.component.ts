import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v3',
  templateUrl: './home-v3.component.html',
  styleUrls: ['./home-v3.component.css']
})
export class HomeV3Component implements OnInit {

  constructor() { }
  classname = "footer-area gray-bg pt-90";
  ftbgimage = "";
  ftlogo = "assets/images/logo-2.1.png";
  ftshape = "d-none";

  ngOnInit(): void {
  }

}
