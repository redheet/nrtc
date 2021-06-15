import { Component, OnInit } from '@angular/core';
import team from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public team = team;

  ngOnInit(): void {
  }

}
