import { Component, OnInit } from '@angular/core';
import plans from '../../../../data/plans.json';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }
  public plans = plans;

  ngOnInit(): void {
  }

}
