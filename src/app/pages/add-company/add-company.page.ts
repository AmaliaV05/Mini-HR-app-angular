import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Company } from "src/app/models/company.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-company',
    templateUrl: 'add-company.page.html',
    styleUrls: ['add-company.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class CompanyAddPage {
    company = new Company();

    constructor(private apiSvc: ApiService,
        private router: Router) {}

    addCompany() {
        this.apiSvc.post('api/Companies', this.company).subscribe(() => {
            this.router.navigateByUrl('/companies');
        });
    }
}