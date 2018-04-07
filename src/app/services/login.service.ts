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

  forgottenPassword(userId, newPassword){
      let forgotPasswordRequest={
        userId: userId,
        oldPassword: null,
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

  sendRecoveryMail(email){
    return this.http.post('http://localhost:8080/customers/forgotpassword' + email, email)
      .toPromise();
  }

  validateToken(token){
    return this.http.get('http://localhost:8080/customers/resetpasswordval?token=' + token)
      .toPromise();
  }

}
