import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdministratorService {

  constructor(private http: HttpClient) {
  }

  getCustomerDataForBusinessOfficer(headers) {
    return this.http
      .get('https://leasingcourseproject.herokuapp.com/officer/loans', headers)
      .toPromise();
  }

}
