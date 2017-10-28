import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public initTiles: string[];

  constructor() { }

  ngOnInit() {
    console.log('Home screen loaded');
    this.initTiles = ['one', 'two', 'three', 'four'];
  }


}
