import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewOfferService {

  constructor(public http: Http) { }

  postNewOffer(offer) {
      const apiUrl = 'http://fintess.azurewebsites.net/api/offers/create/';
      const headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
       });
// header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

      return this.http.post(apiUrl, offer, { headers: headers })
        .map(res =>  {
          return res.json();
        });
  }

}
