import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Person } from "src/app/models/person.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-employee',
    templateUrl: 'add-employee.page.html',
    styleUrls: ['add-employee.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmployeeAddPage implements OnInit {
    employee = new Person();
    idCompany: string;

    constructor(private apiSvc: ApiService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.idCompany = this.route.snapshot.paramMap.get('id');
    }

    addEmployee() {
        this.apiSvc.post(`api/Companies/${this.idCompany}/Employee`, this.employee).subscribe(() => {
            this.router.navigateByUrl(`/companies/${this.idCompany}/employees`);
        });
    }
}