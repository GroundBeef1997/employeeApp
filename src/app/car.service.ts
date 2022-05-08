import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from './car';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = "http://localhost:8080/api/V1/car";
  private url ="http://localhost:8080/api/V1/employee";
  
  constructor(private httpClient: HttpClient) { }

  getCarsList(id: number): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.url}/${id}/car`);
  }
  
  getCarById(id: number): Observable<Car>{
    return this.httpClient.get<Car>(`${this.baseURL}/${id}`);
  }

  addCar(id: number, car: Car): Observable<Object>{
    return this.httpClient.post(`${this.url}/${id}/car`, car)
  }

  updateCar(id: number, car: Car): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, car);
  }

  deleteCar(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
