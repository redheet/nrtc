import { Component, OnInit } from '@angular/core';
import team from '../../../../data/team.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  public team = team;

  ngOnInit(): void {
  }

}
