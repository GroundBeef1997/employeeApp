import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  ListEmployee: Array<Employee> = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action', 'check']; 

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('empl') empl!: MatSelectionList;
  @ViewChild('TABLE') table!: ElementRef;

  constructor(private employeeService: EmployeeService,
    private router: Router ) { }

  ngOnInit(): void {
    this.getEmployees();
    console.log(this.dataSource);
  }

  deselectAllEmployee(){
    this.empl.deselectAll(); 
    console.log("deselected all ");
  }

  getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.sort = this.sort;
      console.log(" dp " + this.dataSource)
    })
  }

  UpdateEmployee(id: number) {
    this.router.navigate(["update-employee", id])
  }

  DeleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

  EmployeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onChange(e: any) {
    console.log(e.checked + "check verified ");
  }
 
  addCar(id: number) {
    this.router.navigate(["create-car", id])
  }

}
