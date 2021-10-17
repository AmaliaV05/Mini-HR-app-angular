import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Company } from "src/app/models/company.model";
import { Employee } from "src/app/models/employee.model";
import { Person } from "src/app/models/person.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-edit-employee',
    templateUrl: 'edit-employee.page.html',
    styleUrls: ['edit-employee.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeEditPage implements OnInit {
    company = new Company();
    employee = new Employee();
    person = new Person();
    edit = false;
    idCompany: string;
    idEmployee: string;

    constructor(private apiSvc: ApiService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.idCompany = this.route.snapshot.paramMap.get('id');
        this.idEmployee = this.route.snapshot.paramMap.get('idEmployee')
        this.getEmployee(this.idCompany, this.idEmployee);
        
    }

    getEmployee(idCompany: string, idEmployee: string) {
        this.apiSvc.get(`api/Companies/${idCompany}/Employee/${idEmployee}`).subscribe(data => {
            this.company = data;
            this.employee = data.employees;
            this.person = data.employees[0].person;
        });
    } 

    goToEmployees() {
        this.router.navigateByUrl(`companies/${this.idCompany}/employees`);
    }

    editMode() {
        this.edit = true;
    }
    
    updateEmployee() {
        this.apiSvc.put(`api/Companies/${this.company.id}`, this.company).subscribe(() => {
            this.router.navigateByUrl(`/companies/${this.company.id}/employee/${this.employee.id}`);
        });
        this.edit = false;
    }

    deleteEmployee(company: Company) {
        this.apiSvc.put(`api/Companies/${company.id}/Employee-Change-Status-To-Inactive/${this.idEmployee}`).subscribe(() => {
            this.router.navigateByUrl(`/companies/${company.id}/employees`);
        });
    }
}