import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {Department} from  './department'


@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {
  private url:string = '../assets/departmentlist.json';
  constructor(private http :HttpClient) {

   }

   getDate() : Observable<Department[]>{
   return this.http.get<Department[]>(this.url);
  }
}
