import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../employee'

@Component({
  selector: 'app-employee-detail',
  /*templateUrl: './employee-detail.component.html',*/
  template : `<h2>Employee Details</h2> 
  <ul *ngIf="employess">
  <li *ngFor="let emp of employess">
  <b>{{emp.id}}.{{emp.name}} {{emp.age}} {{emp.status}}</b>
  </li>
  </ul> 
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employess:IEmployee[];
  constructor() { }

  ngOnInit() {
    this.employess=[
      {id:1,name:'Andy',age:20,status:true},
      {id:1,name:'July',age:18,status:true}
    ]
  }

}
