import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MenuComponent } from './menu/menu.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'createEmployee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: DetailsEmployeeComponent},
  {path: 'createCar/:id', component: CreateCarComponent},
  {path: 'update-Car/:id', component: UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
