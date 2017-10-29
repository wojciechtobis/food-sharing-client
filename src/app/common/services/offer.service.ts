import { GuidResponseDto } from '../dtos/guidResponsedto';
import { OrderDto } from '../dtos/orderdto';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OfferService {


  constructor(public http: Http) { }

  getOffersById(offerId: string): Observable<OrderDto[]> {
      const apiUrl = 'https://fintess.azurewebsites.net/api/offers/' + offerId;
      return this.http.get(apiUrl)
        .map(res =>  {
          return res.json();
        });
  }

  postNewOrder(order): Observable<GuidResponseDto> {
      const apiUrl = 'https://fintess.azurewebsites.net/api/orders/submit/';
      const headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
       });
      return this.http.post(apiUrl, order, { headers: headers })
        .map(res =>  {
          return res.json();
        });
  }
}
