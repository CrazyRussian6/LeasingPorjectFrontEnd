import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleLoanService {

  constructor(private http: HttpClient) { }

  createVehicleLeasing(manufacturer, model, manufacturingDate, enginePower, advancePaymentPercent, advancePaymentAmount,
                       leasingPeriod, margin, contractFee, assetPrice, paymentDate){
    let vehicleLeasing = {
      manufacturer: manufacturer,
      model: model,
      manufacturingDate: manufacturingDate,
      enginePower: enginePower,
      advancePaymentPercent: advancePaymentPercent,
      advancePaymentAmount: advancePaymentAmount,
      leasingPeriod: leasingPeriod,
      margin: margin,
      contractFee: contractFee,
      assetPrice: assetPrice,
      paymentDate: paymentDate
    };

    return this.http
      .post("http://localhost:8080/vehicleLeasings/add", vehicleLeasing)
      .toPromise();
  }

  getAllVehicleLeasingsUsers(){
    return this.http
      .get("http://localhost:8080/vehicleLeasings")
      .toPromise();
  }

}
