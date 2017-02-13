import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Mitarbeiter } from './../models/mitarbeiter';

import 'rxjs/add/operator/map';

@Injectable()
export class MitarbeiterService {

  private backendUrl: string = "https://iksmitarbeiter.herokuapp.com";

  private requestOptions = new RequestOptions({
    headers:new Headers({
      'Authorization': "Basic " + btoa("username:password"), //Durch credentials ersetzen
      'Content-Type': 'application/json'
    })
  })

  constructor(private http: Http) { }

  public getAlleMitarbeiter() {
    return this.http
      .get(this.backendUrl + "/mitarbeiter.json", this.requestOptions)
      .map(res => res.json());
  }

  public erstelleMitarbeiter(mitarbeiter: Mitarbeiter) {
    return this.http
      .post(this.backendUrl + "/mitarbeiter.json", JSON.stringify(mitarbeiter), this.requestOptions)
      .map(res => res.json());
  }

}
