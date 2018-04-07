import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class DataStoreService {

  loanFormInfo: FormGroup;
  privateUserInfo: FormGroup;
  businessUserInfo: FormGroup;

  contractFee;
  advancedPaymentAmount;

  loanResponse;
<<<<<<< HEAD
=======
  officerContent;
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e

  getLoanForm(){return this.loanFormInfo};
  getLoanFormInfo(){return this.loanFormInfo.value};
  getContractFee(){return this.contractFee};
  getAdvancedPaymentAmount(){return this.advancedPaymentAmount};
<<<<<<< HEAD
  
=======

>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
  getPrivateUserForm(){return this.privateUserInfo};
  getPrivateUserData(){return this.privateUserInfo.value};

  getBusinessUserForm(){return this.businessUserInfo};
  getBusinessUserData(){return this.businessUserInfo.value};

  getLoanResponse(){return this.loanResponse}
<<<<<<< HEAD
=======
  getOfficerContent(){return this.officerContent}
>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e

  saveLoanFormInfo(form: FormGroup, contractFee, advancedPaymentAmount){
    this.contractFee=contractFee;
    this.advancedPaymentAmount=advancedPaymentAmount;
    this.loanFormInfo = form;
  }

  storeLoanResponse(response: any){
    this.loanResponse = response;
  }

<<<<<<< HEAD
=======
  storeOfficerContent(response: any){
    this.officerContent = response;
  }

>>>>>>> 329dcb9ef081b7c1bee0d96e4f6759637bbade8e
  savePrivateUserFormInfo(form: FormGroup){
    this.privateUserInfo = form;
  }

  saveBusinessUserFormInfo(form: FormGroup){
    this.businessUserInfo = form;
  }

}



