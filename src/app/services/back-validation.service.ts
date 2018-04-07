import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BackValidationService {

  constructor(private http: Http) { }

  checkEmailUnique(email){
    return this.http
<<<<<<< HEAD
      .get("https://leasingcourseproject.herokuapp.com/customers/" + email)
=======
      .get("http://localhost:8080/customers/" + email)
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();
  }
}
