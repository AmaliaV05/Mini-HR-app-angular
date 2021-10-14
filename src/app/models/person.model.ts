import { Employee } from "./employee.model";

export class Person {
    id: number;
    name: string;
    surname: string;
    ssn: string;
    birthDate: string;
    birthPlace: string;
    employee: Employee;
}