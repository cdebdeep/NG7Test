import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {EmployeeListComponent} from './employee-list/employee-list.component'; 
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DepartmentListComponent} from './department-list/department-list.component';
import {DepartmentDetaiComponent} from './department-detai/department-detai.component';
 
const routes: Routes = [  
  {path:"",component:HomeComponent},  
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"employee",component:EmployeeListComponent},
  {path:"department",component:DepartmentListComponent},
  {path:"departments/:id",component:DepartmentDetaiComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[HomeComponent,AboutComponent,ContactComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentListComponent,DepartmentDetaiComponent]
