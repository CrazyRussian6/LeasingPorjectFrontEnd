import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BusinessUserService {

  constructor(private http: HttpClient) { }

  createBusinessUser(companyID, companyName, email, phoneNumber, address, country){
    let businessUser = {
      companyID: companyID,
      companyName: companyName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      country: country,
      customerType: "BUSINESS"
    }



    return this.http
<<<<<<< HEAD
      .post("https://leasingcourseproject.herokuapp.com/customers/addBusinessCustomer", businessUser)
=======
      .post("http://localhost:8080/customers/addBusinessCustomer", businessUser)
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();

  }

  getAllBusinessUsers(){
    return this.http
<<<<<<< HEAD
      .get("https://leasingcourseproject.herokuapp.com/customers")
=======
      .get("http://localhost:8080/customers")
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();
  }
}
