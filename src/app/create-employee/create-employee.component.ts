import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ]*')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ]*')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  })

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

  get firstName(){
    return this.form.get('firstName')
  }

  get lastName(){
    return this.form.get('lastName')
  }

  get email() {
    return this.form.get('email');
  }

}
