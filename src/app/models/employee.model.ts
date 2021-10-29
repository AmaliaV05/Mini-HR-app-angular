import { Company } from "./company.model";
import { CompanyEmployee } from "./companyemployee.model";
import { Photo } from "./photo.model";

export class Employee {
    id: number;
    name: string;
    surname: string;
    ssn: string;
    birthDate: string;
    birthPlace: string;
    companies: Company[];
    companyEmployees: CompanyEmployee[];
    photo: Photo;
}