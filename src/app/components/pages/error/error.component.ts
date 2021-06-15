import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-2 bg_cover";
  ftbgimage = "assets/images/footer-bg.jpg";
  ftlogo = "assets/images/logo-1.1.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
