import { Component, OnInit } from '@angular/core';
import {Department} from '../department';
import {Observable}  from 'rxjs';
import { DepartmentDataService } from '../department-data.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
      <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of deptList">
      <span class="badge">{{dept.id}}</span>
        {{dept.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  private deptList : Department[]=[];
  private selectedDept: Department;
  private selDeptId:number;
  constructor(private deptDataSrv : DepartmentDataService, private router: Router, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.deptDataSrv.getDate().subscribe(data=>{
      this.deptList=data;
    });

    this.ActivatedRoute.paramMap.subscribe(p=>{
      this.selDeptId=parseInt(p.get('id'));
     });
  }

  onSelect(dept:Department){
    this.selectedDept=dept;    
    this.router.navigate(['/departments',dept.id]);
  }

  isSelected(dept:Department){
    return dept.id===this.selDeptId;
  }

}
