import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  idEmployee!: number;
  id!: number;
  car: Car = new Car();
  employee: Employee = new Employee();

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    
    this.carService.getCarById(this.id).subscribe(data => {
      this.car = data;
    }, error => console.log(error));
  }

  form = new FormGroup({
    intitule: new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ0-9]*')])
  })

  updateCar() {
    // this.carService.updateCar(this.id, this.car.id, this.car).subscribe
    
    this.carService.updateCar(this.id, this.car).subscribe(data =>{
      console.log("car : " + this.id);
      this.goToEmployeeList();
      //goToEmployeeDetails(this.employee.id); à voir redirection vers details
    },
    error => console.log(error));
  }

  goToEmployeeDetails(id: number){
    this.router.navigate(['/employee-details', id]);
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.updateCar();
  }

  get intitule() {
    return this.form.get('intitule');
  }

}
