import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { Employee } from 'src/app/models/employee.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-employees',
    templateUrl: 'employees.page.html',
    styleUrls: ['employees.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeesComponent implements OnInit, OnDestroy {
    companyWithEmployees: Company;
    employees: Employee[];
    columnsToDisplay = ['position','name', 'surname', 'ssn', 'action'];
    idCompany: string;

    constructor(private apiSvc: ApiService, 
        private router: Router,
        private route: ActivatedRoute) { }
    
    ngOnInit() {
      this.idCompany = this.route.snapshot.paramMap.get('id');
      this.loadEmployees(this.idCompany);
        
    }

    ngOnDestroy() {

    }

    goToAddEmployee() {
      this.router.navigateByUrl('companies/employee/add');
    }
    
    private loadEmployees(idCompany: string) {
      this.apiSvc.get(`api/Companies/${idCompany}/Employees-Active-Status`).subscribe((response: Company) => {
        this.companyWithEmployees = response;
        this.employees = response.employees;
      });
    }
}