import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PrivateUserService {

  constructor(private http: HttpClient) { }

  createPrivateUser(firstName, lastName, privateID, email, phoneNumber, address, country){
<<<<<<< HEAD
    let businessUser = {
=======
    let privateUser = {
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      firstName: firstName,
      lastName: lastName,
      privateID: privateID,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      country: country,
      customerType: "PRIVATE"
    };

    return this.http
<<<<<<< HEAD
      .post("https://leasingcourseproject.herokuapp.com/customers/addPrivateCustomer", businessUser)
=======
      .post("http://localhost:8080/customers/addPrivateCustomer", privateUser)
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();
  }

  getAllPrivateUsers(){
    return this.http
<<<<<<< HEAD
      .get("https://leasingcourseproject.herokuapp.com/customers")
=======
      .get("http://localhost:8080/customers")
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();
  }
}
