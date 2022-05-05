import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee : Employee = new Employee(); 

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
    private router: Router) { }

  formUpdate = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ]*')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ]*')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  })  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  get firstName(){
    return this.formUpdate.get('firstName')
  }

  get lastName(){
    return this.formUpdate.get('lastName')
  }

  get email() {
    return this.formUpdate.get('email');
  }

}
