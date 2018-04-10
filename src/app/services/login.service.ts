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
      .post("https://leasingcourseproject.herokuapp.com/customers/login", loginRequest)
      .toPromise();
  }

  requestPasswordChange(userId, oldPassword, newPassword){
    let passwordChangeRequest={
      userId: userId,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http
      .post("https://leasingcourseproject.herokuapp.com/customers/change/password", passwordChangeRequest)
      .toPromise();
  }

  forgottenPassword(userId, newPassword, token){
      let forgotPasswordRequest={
        userId: userId,
        oldPassword: token,
        newPassword: newPassword
      };

    return this.http
      .post("https://leasingcourseproject.herokuapp.com/customers/change/forgot", forgotPasswordRequest)
      .toPromise();
  }

  existsUser(userId, email) {
    let credentialsRequest = {
      userId: userId,
      email: email
    };

    return this.http.post('https://leasingcourseproject.herokuapp.com/customers/check', credentialsRequest)
      .toPromise();
  }

  sendRecoveryMail(userId, email){
    let credentialsRequest = {
      userId: userId,
      email: email
    };
    return this.http.post('https://leasingcourseproject.herokuapp.com/customers/forgotpassword', credentialsRequest)
      .toPromise();
  }

  validateToken(token){
    return this.http.get('https://leasingcourseproject.herokuapp.com/customers/resetpasswordval?token=' + token)
      .toPromise();
  }

}
