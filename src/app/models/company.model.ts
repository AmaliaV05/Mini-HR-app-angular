import { Employee } from "./employee.model";

export class Company {
    id: number;
    companyName: string;
    fiscalCode: string;
    registryNo: string;
    euid: string;  
    dateOfEstablishment: string; 
    naceCode: string;
    activity: string;
    activityDescription: string;
    employees: Employee[];
}