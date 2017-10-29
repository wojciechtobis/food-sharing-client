import { OfferService } from '../../services/offer.service';
import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.activatedRouter.queryParams
      .subscribe(params => {
        this.offerId = params['offerId'];
      });

    const sadn = this.offerService.getOffersById(this.offerId);
    sadn.subscribe(res => {
      this.offer = res;
    });

  }

  public send() {

  }

}
