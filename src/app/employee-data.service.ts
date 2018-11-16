import { Injectable } from '@angular/core';
import {IEmployee} from './employee';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public employess:IEmployee[];
  private url:string='../assets/employeelist.json';
  constructor(private httpClient:HttpClient) {     
  }
  getData():Observable<IEmployee[]>{
   return this.httpClient.get<IEmployee[]>(this.url);
  }
}
