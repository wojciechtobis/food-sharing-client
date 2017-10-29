import { BasicService } from './common/services/basic.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private basicService: BasicService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public addNewOffer() {
    console.log('clicked');
    this.router.navigate(['/new-offer']);
  }

   public backToMain() {
    this.router.navigate(['/home']);
  }

}
