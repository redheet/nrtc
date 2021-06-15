import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-2 bg_cover";
  ftbgimage = "assets/images/footer-bg.jpg";
  ftlogo = "assets/images/logo-1.1.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
