import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {


  constructor(private http: HttpClient) { }

  createLoginRequest(userId, password){
    let loginRequest = {
      userId: userId,
      password: password
    };

    return this.http
<<<<<<< HEAD
      .post("https://leasingcourseproject.herokuapp.com/customers/login", loginRequest)
=======
      .post("http://localhost:8080/customers/login", loginRequest)
      .toPromise();
  }

  createOfficerLoginRequest(userId, password){
    let loginRequest = {
      userId: userId,
      password: password
    };

    return this.http
      .post("http://localhost:8080/officer/login", loginRequest)
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();
  }

  requestPasswordChange(userId, oldPassword, newPassword){
    let passwordChangeRequest={
      userId: userId,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http
<<<<<<< HEAD
      .post("https://leasingcourseproject.herokuapp.com/customers/change/password", passwordChangeRequest)
      .toPromise();
  }

  forgottenPassword(userId, newPassword){
      let forgotPasswordRequest={
        userId: userId,
        oldPassword: null,
=======
      .post("http://localhost:8080/customers/change/password", passwordChangeRequest)
      .toPromise();
  }

  forgottenPassword(userId, newPassword, token){
      let forgotPasswordRequest={
        userId: userId,
        oldPassword: token,
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
        newPassword: newPassword
      };

    return this.http
<<<<<<< HEAD
      .post("https://leasingcourseproject.herokuapp.com/customers/change/forgot", forgotPasswordRequest)
=======
      .post("http://localhost:8080/customers/change/forgot", forgotPasswordRequest)
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();
  }

  existsUser(userId, email) {
    let credentialsRequest = {
      userId: userId,
      email: email
    };

<<<<<<< HEAD
    return this.http.post('https://leasingcourseproject.herokuapp.com/customers/check', credentialsRequest)
=======
    return this.http.post("http://localhost:8080/customers/check", credentialsRequest)
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
      .toPromise();
  }

  sendRecoveryMail(email){
    return this.http.post('http://localhost:8080/customers/forgotpassword' + email, email)
      .toPromise();
  }

  validateToken(token){
    return this.http.get('http://localhost:8080/customers/resetpasswordval?token=' + token)
      .toPromise();
  }

}
