import { BasicService } from './common/services/basic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private basicService: BasicService) {
  }

  ngOnInit(): void {
    this.basicService.search('test');
    console.log('test');
  }

}
