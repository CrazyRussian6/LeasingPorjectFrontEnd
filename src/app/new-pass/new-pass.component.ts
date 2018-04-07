import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {

  public newPasswordForm: FormGroup;

  validInput = true;
  validUser = true;

<<<<<<< HEAD
  token;
=======
  token = null;
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
  validToken = false;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService,
              private route: ActivatedRoute) {

    this.route.queryParams
      .subscribe(params => {
        this.token = params.token;
      });

    this.newPasswordForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
      newPassword: [null, [Validators.required]],
      repeatPassword: [null, [Validators.required]],
    });

    if(this.token == null){
<<<<<<< HEAD
      console.log("NO TOKEN SPECIFIED, SHOULD CLOSE PAGE OR SOMETHING?");
=======
      console.log("NO TOKEN SPECIFIED");
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
    }
  }

  get userId() {
    return this.newPasswordForm.get('userId') as FormControl;
  }

  get newPassword() {
    return this.newPasswordForm.get('newPassword') as FormControl;
  }

  get repeatPassword() {
    return this.newPasswordForm.get('repeatPassword') as FormControl;
  }

  submit() {
<<<<<<< HEAD
    if (this.validToken && (this.newPassword.value === this.repeatPassword.value)) {
      this.loginService.forgottenPassword(this.userId.value, this.newPassword.value)
=======

    if (this.validToken && (this.newPassword.value === this.repeatPassword.value)) {
      this.loginService.forgottenPassword(this.userId.value, this.newPassword.value, this.token)
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
        .then(data => {
          if (data === true) {
            this.validUser = true;
            console.log('success');
            this.router.navigate(['/']);
          }
          else if (data === false) {
            console.log('failure');
            this.validUser = false;
          }
        });
    }
    else {
      //console.log("Input passwords not equal");
      this.validInput = false;
    }
  }

  close() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.loginService.validateToken(this.token)
      .catch((error: any) => {
<<<<<<< HEAD
        if(error.status === 200){
=======
        console.log(error);
        if(error.status === 200){
          console.log(error);
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
          this.validToken = true;
          console.log("VALID TOKEN")
        }
        else if(error.status === 404){
          this.validToken = false;
          console.log("INVALID TOKEN, SHOULD CLOSE PAGE OR SOMETHING")
        }
      });
  }

}
