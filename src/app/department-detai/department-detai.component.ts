import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detai',
  templateUrl: './department-detai.component.html',
  styleUrls: ['./department-detai.component.css']
})
export class DepartmentDetaiComponent implements OnInit {
  private selDeptId:number;
  constructor(private ActivatedRoute:ActivatedRoute, private Router : Router) {

   }

  ngOnInit() {
   //this.selDeptId = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'));
   this.ActivatedRoute.paramMap.subscribe(p=>{
    this.selDeptId=parseInt(p.get('id'));
   });
  }

  onPervClick(){    
    let prevId=this.selDeptId-1;
    this.Router.navigate(['/departments',prevId])
  }
  onNextClick(){    
    let nextId=this.selDeptId+1;
    this.Router.navigate(['/departments',nextId])
  }
  onBackClick(){
    this.Router.navigate(['/department',{id:this.selDeptId,test:"data"}])
  }

}
