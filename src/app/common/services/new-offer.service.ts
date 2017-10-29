import { GuidResponseDto } from '../dtos/guidResponsedto';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewOfferService {

  constructor(public http: Http) { }

  postNewOffer(offer): Observable<GuidResponseDto> {
      const apiUrl = 'https://fintess.azurewebsites.net/api/offers/create/';
      const headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
       });
      return this.http.post(apiUrl, offer, { headers: headers })
        .map(res =>  {
          return res.json();
        });
  }

  postNewProduct(product): Observable<GuidResponseDto> {
      const apiUrl = 'https://fintess.azurewebsites.net/api/products/create/';
      const headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
       });
      return this.http.post(apiUrl, product, { headers: headers })
        .map(res =>  {
          return res.json();
        });
  }

}
