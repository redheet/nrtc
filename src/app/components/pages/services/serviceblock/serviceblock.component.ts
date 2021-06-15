import { Component, OnInit } from '@angular/core';
import services from '../../../../data/services.json';

@Component({
  selector: 'app-serviceblock',
  templateUrl: './serviceblock.component.html',
  styleUrls: ['./serviceblock.component.css']
})
export class ServiceblockComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public serviceblock = services;

  ngOnInit(): void {
  }

}
