import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  list = [
    {
      title:"Information Technology",
      text:"Many aspects of computing and technology and the term is more recognizable than before."
    },
    {
      title:"Information Technology",
      text:"Many aspects of computing and technology and the term is more recognizable than before."
    },
    {
      title:"Information Technology",
      text:"Many aspects of computing and technology and the term is more recognizable than before."
    }
  ];

  ngOnInit(): void {
  }

}
