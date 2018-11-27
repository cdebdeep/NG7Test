import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {routingComponent} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetaiComponent } from './department-detai/department-detai.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponent,
    EmployeeDetailComponent,
    PageNotFoundComponent,
    DepartmentListComponent,
    DepartmentDetaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
