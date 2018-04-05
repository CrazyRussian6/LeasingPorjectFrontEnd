import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import  {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InputLoanInfoComponent } from '../input-loan-info/input-loan-info.component';


@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})
export class LoanStatusComponent implements OnInit {
  loanData;
  
  constructor(private route: ActivatedRoute, public dataStore : DataStoreService,private modalService: NgbModal
  /*inputLoan: InputLoanInfoComponent*/) {
    this.loanData = dataStore.getLoanResponse();
  }

  closeResult: string;

   open(content, i){
    this.displayPaySchedule(this.loanData[i])
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private monthlyPayment;
  private monthlypaymentDate = [];
  private totalInterestSum;
  private totalPaymentSum;

  displayPaySchedule(loanData) {
    let perc = 0.01;
    console.log(loanData.assetPrice);
    this.totalInterestSum = 0;
    let advancePayment = +(loanData.assetPrice*(loanData.advancePaymentPercent/100));
    let marginVal = (loanData.margin /100)/12;
    let divisor = (1 - (1/Math.pow(1 + marginVal, loanData.leasingPeriod)))/marginVal;
    this.monthlyPayment = (loanData.assetPrice - advancePayment)/divisor;
    let remainingAmount = loanData.assetPrice - advancePayment;
    let contractFee = loanData.assetPrice*perc;
    if(contractFee<200){
      contractFee = 200;
    }
    this.totalPaymentSum = +contractFee + advancePayment;
 
    let dates = this.findPaymentDates(loanData.leasingPeriod, loanData.paymentDate);
    for(let month = 0; month < loanData.leasingPeriod; month++){
      let withInterest = (remainingAmount * (1 + marginVal));
      let interestPaymentAmount = withInterest - remainingAmount;
      let assetValuePaymentAmount = (this.monthlyPayment - interestPaymentAmount);
      this.totalInterestSum+=interestPaymentAmount;
      this.totalPaymentSum+=this.monthlyPayment;
      this.monthlypaymentDate[month] = {
        paymentDate: dates[month],
        remainingAmount: remainingAmount.toFixed(2),
        interestPaymentAmount: interestPaymentAmount.toFixed(2),
        assetValuePaymentAmount: assetValuePaymentAmount.toFixed(2),
        monthlyPayment: this.monthlyPayment.toFixed(2)
      };
      remainingAmount -= assetValuePaymentAmount;
    } 
    return this.monthlypaymentDate;
  }
  private findPaymentDates(leasingPeriod, paymentDate){
    let paymentDates = [];
    let startDate = new Date();
    if(startDate.getDay() > paymentDate){
      startDate.setMonth(startDate.getMonth() + 1);
    }
    startDate.setDate(paymentDate);
    for (let i = 0; i < leasingPeriod; i++){
      paymentDates[i] = startDate.toISOString().split('T')[0];
      startDate.setMonth(startDate.getMonth() + 1);
    }
    return paymentDates;
  }

  ngOnInit() {
  }
}
