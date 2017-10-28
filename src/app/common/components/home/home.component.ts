import { OfferDto } from '../../dtos/offerdto';
import { HomeService } from '../../services/home.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public offers;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    const dalsks = this.homeService.getOffers();
    dalsks.subscribe(res =>  {
      this.offers = res;
      console.log(this.offers);
    });

  }


}
