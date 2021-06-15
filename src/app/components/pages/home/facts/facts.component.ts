import { Component, OnInit } from '@angular/core';
import counter from '../../../../data/counter.json';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  constructor() { }
  public counterblock = counter;

  ngOnInit(): void {
  }

}
