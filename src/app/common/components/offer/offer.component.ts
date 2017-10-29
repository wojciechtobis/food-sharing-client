import { OfferService } from '../../services/offer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(
      private offerService: OfferService,
      private activatedRouter: ActivatedRoute,
      private router: Router
  ) { }

  private offerId: string;
  public offer;
  selectedProducts: string[];
  selectedTime: string;

  email: FormControl;
  userName: FormControl;
  public products;

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

    const newOrder = {
      requestorEmail: this.email.value,
      receiveTime: this.selectedTime,
      offerId: this.offerId,
      productIds: this.selectedProducts,
      requestorName: this.userName.value
    };

    this.offerService.postNewOrder(newOrder);
    this.router.navigate(['/new-order-confirm']);
  }

  public selectProduct(productId) {
    if (!this.selectedProducts) {
      this.selectedProducts = [productId];
      return;
    }
    if (this.selectedProducts.filter(v => v === productId).length === 0) {
      this.selectedProducts.push(productId);
    } else {
      this.selectedProducts = this.selectedProducts.filter(v => v !== productId);
    }
  }

  public selectTime(receiveTime) {
      this.selectedTime = receiveTime;
  }
}
