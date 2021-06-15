import { Component, OnInit } from '@angular/core';
import plans from '../../../../data/plans.json';

@Component({
  selector: 'app-styleonw',
  templateUrl: './styleonw.component.html',
  styleUrls: ['./styleonw.component.css']
})
export class StyleonwComponent implements OnInit {

  constructor() { }
  public plans = plans;

  ngOnInit(): void {
  }

}
