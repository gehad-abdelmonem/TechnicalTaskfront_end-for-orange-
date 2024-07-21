import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/Models/ICustomer';
import { Customerparams } from '../../Models/CustomerParams';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerList:ICustomer[]=[];
  totalCount:number = 0;
  customerparams:Customerparams=new Customerparams();
  constructor(private customerService:CustomerService)
  {

  }
  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers()
  {
    this.customerService.GetAllCustomers(this.customerparams)
    .subscribe({
      next:(resp)=>{
        console.log(resp);
        this.customerList=resp.data;
        this.totalCount=resp.count;
      },
      error:(err)=>console.log(err)
    })
  }
  onPageChange(event:any)
  {
    this.customerparams.pageNumber=event;
    this.getCustomers();

  }

}
