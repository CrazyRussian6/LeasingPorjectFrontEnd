import { Component, OnInit,  } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import {Http, Response } from '@angular/http'
import { CarList } from './CarList';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-input-loan-info',
  templateUrl: './input-loan-info.component.html',
  styleUrls: ['./input-loan-info.component.css']
})
export class InputLoanInfoComponent implements OnInit {


    public loanForm: FormGroup;
    private userType: String = undefined;
    private minAssetPrice: number = 5000;

    private cars;
     models;
    private i: number = 0;
    fb: FormBuilder;

    constructor(fb: FormBuilder, private router: Router,  public dataStore : DataStoreService ){
     this.cars =new CarList().cars;
      this.fb = fb;    
    }

    createForm(userType){ //constructor
      return this.fb.group({
        customerType:[userType, Validators.required],
        assetType:[null, Validators.required],
        carBrand:[null, Validators.required],
        carModel:[null, Validators.required],
        year: [2000, [Validators.required, Validators.minLength(4), Validators.min(2000), Validators.maxLength(4),
          Validators.max(new Date().getFullYear()), Validators.pattern("^[0-9]*$")]],
        enginePower:[0, [Validators.required, Validators.max(1000), Validators.maxLength(3),
          Validators.min(0), Validators.pattern("^[0-9]*$")]],
        assetPrice:[5000, [Validators.required, Validators.min(5000), Validators.max(1000000000), Validators.pattern("^[0-9]*$")]],
        paymentPercentage:[10, [Validators.required, Validators.min(10), Validators.max(100),
                          Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]],
        leasePeriod:[null, Validators.required],
        margin:[3.2, [Validators.required, Validators.min(3.2), Validators.max(100), Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]],
        contractFee:[200, [Validators.required, Validators.max(1000000000)]],
        paymentDay:[null, [Validators.required, Validators.min(15), Validators.max(30)]]



      })
    }

    calculateAdvancedPaymentAmount(){
      let firstPaymentPrice=(this.assetPriceValue*(this.paymentPercentageValue/100));
      return firstPaymentPrice;
    }

    calculateContractFee(){
      let perc = 0.01;
      let contractFee = this.assetPriceValue*perc;
      if(contractFee<200){
        return 200;
      }else return contractFee;
    }

    findModels(){
      for (let i=0; i< this.cars.length; i++){
        if (this.cars[i].make === this.loanForm.get('carBrand').value){
              this.models=this.cars[i].model;
        }
      }
    }

    get assetType(){return this.loanForm.get('assetType') as FormControl};
    get customerType(){return this.loanForm.get('customerType') as FormControl};
    get year(){return this.loanForm.get('year') as FormControl};
    get paymentAmount(){return this.loanForm.get('paymentAmount') as FormControl};
    get carBrand(){return this.loanForm.get('carBrand') as FormControl};
    get advancedPaymentAmount(){return this.advancedPaymentAmount};
    get enginePower(){return this.loanForm.get('enginePower') as FormControl};
    get assetPrice(){return this.loanForm.get('assetPrice') as FormControl};
    get paymentDay(){return this.loanForm.get('paymentDay') as FormControl};
    get paymentPercentage(){return this.loanForm.get('paymentPercentage') as FormControl};
    get margin() {return this.loanForm.get('margin') as FormControl};


    get assetPriceValue(){return this.loanForm.get('assetPrice').value}
    get paymentPercentageValue(){return this.loanForm.get('paymentPercentage').value}

    set assetPriceValue(minAssetPrice){
      this.loanForm.setValue(minAssetPrice);
    }

    send(){
      this.dataStore.saveLoanFormInfo(this.loanForm, this.calculateContractFee(), this.calculateAdvancedPaymentAmount());
      if(this.loanForm.value.customerType==='Private'){
          this.router.navigate(['/input-private-user-info']);
      }else {
          this.router.navigate(['/input-business-user-info']);
      }
    }
    reset(){ // after reset button
      this.userType = undefined;
      this._reset();
    }
    _reset(){       
     this.loanForm = this.createForm(this.userType);
     this.loanForm.updateValueAndValidity;   
    }

  ngOnInit() {

    this.loanForm = this.createForm(this.userType);
    if(this.dataStore.loanFormInfo){
      this.loanForm = this.dataStore.getLoanForm();
    }
  }

  userTypeChange(userTypeT: string){
    this.userType = userTypeT;  // "Private" or "Business"
    this._reset();
    this.loanForm.patchValue({"assetPrice": this.findMinAssetPrice()})
    this.loanForm.controls['assetPrice'].setValidators([Validators.required, Validators.min(this.findMinAssetPrice()), Validators.pattern("^[0-9]*$")]);
    this.loanForm.controls['assetPrice'].updateValueAndValidity();
 }

  findMinAssetPrice(){
    if (this.userType === "Private"){
      this.minAssetPrice = 5000;
      return this.minAssetPrice;
    }
    if (this.userType === "Business"){
      this.minAssetPrice = 10000;
      return this.minAssetPrice;
    }
  }



}
