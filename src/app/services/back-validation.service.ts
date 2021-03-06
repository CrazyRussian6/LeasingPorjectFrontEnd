import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BackValidationService {

  constructor(private http: Http) { }

  checkEmailUnique(email){
    return this.http
      .get("https://leasingcourseproject.herokuapp.com/customers/" + email)
      .toPromise();
  }
}
