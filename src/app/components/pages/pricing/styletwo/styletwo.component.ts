import { Component, OnInit } from '@angular/core';
import plans from '../../../../data/plans.json';

@Component({
  selector: 'app-styletwo',
  templateUrl: './styletwo.component.html',
  styleUrls: ['./styletwo.component.css']
})
export class StyletwoComponent implements OnInit {

  constructor() { }
  public plans = plans;

  ngOnInit(): void {
  }

}
