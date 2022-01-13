import { Employee } from "./employee.model";

export class Photo {
    id: number;
    url: string;
    publicId: string;
    employee: Employee;
}