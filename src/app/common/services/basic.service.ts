import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BasicService {
  public apiRoot = 'http://fintess.azurewebsites.net/api/';
  results: Object[];
  loading: boolean;

  constructor(
    private http: Http
  ) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      const apiUrl = this.apiRoot;
      this.http.get(apiUrl)
      .toPromise()
      .then(
        res => {// Success
          console.log(res.json());
          resolve();
        }
      );
    });

    return promise;
  }

}
