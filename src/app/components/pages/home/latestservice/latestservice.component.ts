import { Component, OnInit } from '@angular/core';
import services from '../../../../data/services.json';

@Component({
  selector: 'app-latestservice',
  templateUrl: './latestservice.component.html',
  styleUrls: ['./latestservice.component.css']
})
export class LatestserviceComponent implements OnInit {

  constructor() { }
  public serviceblock = services;

  ngOnInit(): void {
  }

}
