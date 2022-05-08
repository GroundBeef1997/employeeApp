import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  id!: number;
  car: Car = new Car();
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {}

  form = new FormGroup({
    intitule: new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÀ-ÖØ-öø-ÿ]*')])
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  saveCar() {
    this.carService.addCar(this.id, this.car).subscribe(data =>{
      //console.log(data);
      this.goToEmployeeDetails(this.id);
    },
    error => console.log(error));
  }

  goToEmployeeDetails(id: number){
    this.router.navigate(['/employee-details', id]);
  }

  onSubmit() {
    this.saveCar();
  }

  get intitule() {
    return this.form.get('intitule');
  }

}
