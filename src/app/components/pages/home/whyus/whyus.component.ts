import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  whychooseus = [
    {
      icon:"fal fa-laptop-code",
      title:"Modify Whole System",
      text:"Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem aperiam eaque ipsa"
    },
    {
      icon:"fal fa-server",
      title:"Beneficial Strategies",
      text:"Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem aperiam eaque ipsa"
    },
    {
      icon:"fal fa-tools",
      title:"Automated Software",
      text:"Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem aperiam eaque ipsa"
    }
  ];

  ngOnInit(): void {
  }

}
