import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public forgetPasswordForm: FormGroup;

  customerFound = true;

  @Output()
  existenceConfirmation = new EventEmitter<Object>();

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {

    this.forgetPasswordForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      /* newPassword:[null, [Validators.required, Validators.maxLength(20) ]], */
    });
  }

  get userId() {
    return this.forgetPasswordForm.get('userId') as FormControl;
  }

  get email() {
    return this.forgetPasswordForm.get('email') as FormControl;
  }

  submit(){
    this.checkIfCustomerExists()
      .then(data => {
        if(this.customerFound){
          this.loginService.sendRecoveryMail(this.email.value)
            .then(data  => {
              console.log("should show success message")
            })
            .catch((error: any) => {
            });
          //this.router.navigate(['/new-pass']);
        }
      });
  }

  back(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

  checkIfCustomerExists() {
    return this.loginService.existsUser(this.userId.value, this.email.value)
      .catch((error: any) => {
        if(error.status === 200){
          this.customerFound = true;
        }
        else if(error.status === 404){
          this.customerFound = false;
        }
      });
  }


}
