import { Component, OnInit } from '@angular/core';
import counter from '../../../../data/counter.json';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }
  public counter = counter;
  faqs = [
    {
      title:"Does any industry a more audience journey?",
      text:"Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real."
    },
    {
      title:"Over the years, a wide range of developments",
      text:"Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real."
    },
    {
      title:"As a result, most of us need to know",
      text:"Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real."
    },
    {
      title:"Our knowledge of computers will help us",
      text:"Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real."
    }
  ];

  ngOnInit(): void {
  }

}
