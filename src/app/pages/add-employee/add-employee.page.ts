import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/models/employee.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-employee',
    templateUrl: 'add-employee.page.html',
    styleUrls: ['add-employee.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeAddPage implements OnInit {
    employee = new Employee();
    idCompany: string;

    constructor(private apiSvc: ApiService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.idCompany = this.route.snapshot.paramMap.get('id');
    }

    addEmployee() {
        this.apiSvc.post(`api/Companies/${this.idCompany}/Employee`, this.employee).subscribe(() => {
            //this.router.navigateByUrl(`/companies/${this.idCompany}/Employees`);
        });
    }

    addPhoto() {
        this.apiSvc.post(`api/Employees/${this.employee.id}/Add-Photo`).subscribe(() => {

        });
    }
}