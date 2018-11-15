import { Injectable } from '@angular/core';
import {IEmployee} from './employee';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public employess:IEmployee[];
  constructor(private httpClient:HttpClient) { 
    this.employess=[
      {id:1,name:'Andy',age:20,status:true},
      {id:1,name:'July',age:18,status:true}
    ]
  }
  getData():Observable<IEmployee[]>{
   return this.httpClient.get<IEmployee[]>('');
  }
}
