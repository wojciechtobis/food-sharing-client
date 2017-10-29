import { OrderDto } from '../dtos/orderdto';
import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeService {

  constructor(public http: Http) {
  }

  getOffers(): Observable<OrderDto[]> {
      const apiUrl = 'http://fintess.azurewebsites.net/api/offers/';
      return this.http.get(apiUrl)
        .map(res =>  {
          return res.json();
        });
  }

  getOffersByText(text: string, isFoundation: boolean): Observable<OrderDto[]> {
      const apiUrl = 'http://fintess.azurewebsites.net/api/search?query=' + text + '&isFoundation=' + isFoundation;
      return this.http.get(apiUrl)
        .map(res =>  {
          return res.json();
        });
  }
}




