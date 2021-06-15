import { Component, OnInit } from '@angular/core';
import services from '../../../../data/services.json';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }
  public services = services;

  ngOnInit(): void {
  }

}
