import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../employee';
import {EmployeeDataService} from '../employee-data.service'


@Component({
  selector: 'app-employee-list',
  /*templateUrl: './employee-list.component.html',*/
  template:`<h2>Employee List</h2> 
  <ul *ngIf="employess">  
  <li *ngFor="let emp of employess">
  <b>{{emp.name}}</b>
  </li>
  </ul> 
  <app-employee-detail></app-employee-detail>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employess:IEmployee[];
  constructor(private empDataSrv:EmployeeDataService) {

   }

  ngOnInit() {
    this.empDataSrv.getData().subscribe(data=>this.employess=data);
    }

}
