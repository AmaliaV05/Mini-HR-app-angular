import { Company } from "./company.model";
import { CompanyEmployee } from "./companyemployee.model";
import { Person } from "./person.model";

export class Employee {
    id: number;
    companies: Company[];
    companyEmployees: CompanyEmployee[];
    person: Person;
    personId: number;
}