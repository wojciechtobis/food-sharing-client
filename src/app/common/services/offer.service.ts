import { OrderDto } from '../dtos/orderdto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OfferService {


  constructor(public http: Http) { }

  getOffersById(offerId: string): Observable<OrderDto[]> {
      const apiUrl = 'http://fintess.azurewebsites.net/api/offers/' + offerId;
      return this.http.get(apiUrl)
        .map(res =>  {
          return res.json();
        });
  }

  getProductById(productId: string): Observable<OrderDto[]> {
      const apiUrl = 'http://fintess.azurewebsites.net/api/products/' + productId;
      return this.http.get(apiUrl)
        .map(res =>  {
          return res.json();
        });
  }

}
