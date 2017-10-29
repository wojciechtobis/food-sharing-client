import { OfferDto } from '../../dtos/offerdto';
import { HomeService } from '../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import {MatCardModule} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public offers;
  searchText: FormControl;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.searchText = new FormControl();

    const allOffers = this.homeService.getOffers();
    allOffers.subscribe(res =>  {
      this.offers = res;
    });

  }

  public searchOffer() {
    const search = this.searchText.value;
    const searchedOffers = this.homeService.getOffersByText(search);
    searchedOffers.subscribe(res => {
      this.offers = res;
    });
  }

  public looolClick() {
    console.log('loolClickadsasdsads');
  }

}
