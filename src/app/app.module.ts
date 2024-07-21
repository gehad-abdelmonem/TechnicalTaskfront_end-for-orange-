import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { CustomersComponent } from './Component/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { PiechartComponent } from './Component/piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CustomersComponent,
    PiechartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbPaginationModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
