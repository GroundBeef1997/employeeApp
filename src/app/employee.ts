import { Car } from "./car";

export class Employee {
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    cars!: Array<Car>;
}
