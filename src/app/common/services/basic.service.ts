import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BasicService {
  public apiRoot = 'https://fintess.azurewebsites.net/api/';
//  public apiRoot = 'https://itunes.apple.com/search?term=Moo&media=music&limit=20';
  results: Object[];
  loading: boolean;

  constructor(
    public http: Http
  ) {
    this.results = [];
    this.loading = false;
  }

}
