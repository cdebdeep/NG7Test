import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../employee';
import {EmployeeDataService} from '../employee-data.service'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',  
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employess:IEmployee[];
  private selectedEmp:IEmployee;
  constructor(private empDataSrv:EmployeeDataService) {

   }

  ngOnInit() {
    this.empDataSrv.getData().subscribe(data=>this.employess=data);    
    }

    selectEmp(selectedEmp:IEmployee){
      this.selectedEmp=selectedEmp;      
    }

}
