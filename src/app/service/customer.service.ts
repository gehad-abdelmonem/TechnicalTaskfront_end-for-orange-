import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customerparams } from '../Models/CustomerParams';
import { Observable } from 'rxjs';
import { ICustomer } from '../Models/ICustomer';
import { PagedCollectionResponse } from '../Models/export interface PagedCollectionResponse';
import { ServiceTypeCustomerCount } from '../Models/ServiceTypeCustomerCount';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  APIURL = 'https://localhost:44319/api/Customer';

  constructor(private httpClient: HttpClient) {}

  GetAllCustomers(
    customerParams: Customerparams
  ): Observable<PagedCollectionResponse<ICustomer>> {
    let params = new HttpParams();
    params = params.append('PageNumber', customerParams.pageNumber);
    params = params.append('PageSize', customerParams.pageSize);

    return this.httpClient.get<PagedCollectionResponse<ICustomer>>(
      `${this.APIURL}/paginate`,
      { params: params }
    );
  }

  GetPieChartData(): Observable<ServiceTypeCustomerCount[]> {
    return this.httpClient.get<ServiceTypeCustomerCount[]>(
      `${this.APIURL}/ServiceTypeCustomerCount`
    );
  }
}
