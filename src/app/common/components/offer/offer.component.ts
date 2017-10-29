import { OfferService } from '../../services/offer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(
      private offerService: OfferService,
      private activatedRouter: ActivatedRoute
  ) { }

  private offerId: string;
  public offer;
  selectedProducts;

  email: FormControl;
  userName: FormControl;

  ngOnInit() {
    this.email = new FormControl();
    this.userName = new FormControl();

    this.activatedRouter.queryParams
      .subscribe(params => {
        this.offerId = params['offerId'];
      });

    const offersById = this.offerService.getOffersById(this.offerId);
    offersById.subscribe(res => {
      this.offer = res;
    });

  }

  public send() {
    console.log('clicked send');

  }

  public selectProduct(product) {
    this.selectedProducts = [];
  }

}
