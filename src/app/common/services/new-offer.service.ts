import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewOfferService {

  constructor(public http: Http) { }

  postNewOffer(offer) {
      const apiUrl = 'http://fintess.azurewebsites.net/api/offers/create/';
      this.http.post(apiUrl, offer);
  }

}
