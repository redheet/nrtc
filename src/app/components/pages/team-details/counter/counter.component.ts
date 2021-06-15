import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  progressbar = [
    {
      icon:"fal fa-map",
      value:75,
      countervalue:280
    },
    {
      icon:"fal fa-chart-bar",
      value:85,
      countervalue:782
    },
    {
      icon:"fal fa-chart-pie",
      value:50,
      countervalue:"9m"
    },
    {
      icon:"fal fa-user-friends",
      value:65,
      countervalue:100
    }
  ];

  ngOnInit(): void {
  }

}
