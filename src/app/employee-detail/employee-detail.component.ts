import { Component, OnInit, OnChanges, Input,Output,EventEmitter,SimpleChanges,SimpleChange } from '@angular/core';
import {IEmployee} from '../employee';
import {IEmployeeDetailView} from '../employeeDetailView';
import {EmployeeDataService} from '../employee-data.service'
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html', 
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnChanges, OnInit  {
  
  ngOnChanges(changes: SimpleChanges): void {
    const emp:SimpleChange=changes.selEmp;
    if((emp.currentValue!=undefined) && (this.employess!=undefined)) {
      console.log(emp.currentValue.name);
      this.employess.forEach(e => {
        if(e.name==emp.currentValue.name){
          e.seleted=true;
        }else{
          e.seleted=false;
        }
      });
    }     
  }

  ngOnInit() {
    this.empDataSrv.getData().subscribe(
      data=>(
        data.forEach(d=>{
          let empDetailview : IEmployeeDetailView = new IEmployeeDetailView();
          empDetailview.name=d.name;
          empDetailview.age=d.age;
          empDetailview.id=d.id;
          empDetailview.status=d.status;
          empDetailview.seleted=false;
          this.employess.push(empDetailview);
        })
      )
      );
  }
  
  public employess:IEmployeeDetailView[]=[];
  @Input() private selEmp:IEmployee;
  

  constructor(private empDataSrv:EmployeeDataService) { }

  

}
