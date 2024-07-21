import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import { ServiceTypeCustomerCount } from 'src/app/Models/ServiceTypeCustomerCount';
import { CustomerService } from 'src/app/service/customer.service';
Chart.register(...registerables);
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  charData:ServiceTypeCustomerCount[]=[];
  labels:any[]=[];
  data:any[]=[];
  constructor(private customerService:CustomerService)
  {

  }
  ngOnInit(): void {
    this.getServceCustomerTc();
   
  }
  
  getServceCustomerTc()
  {
   this.customerService.GetPieChartData().subscribe({
    next:data=>{this.charData=data
      console.log(this.charData);
      for(let i=0;i<this.charData.length;i++)
        {
          //console.log(this.charData[i])
          this.labels.push(this.charData[i].serviceType);
          this.data.push(this.charData[i].customerCount);
        }
        this.RenderChart(this.labels, this.data);
    },
    error:err=>console.log(err)
   });
  } 
   RenderChart(chartLabels:any,chartData:any)
  {

 const myChar= new Chart("piechart", {
    type: 'pie',
    data: {
      labels: chartLabels,
      datasets: [{
        label: '# of Votes',
        data: chartData,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
    }
     

}
