import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Company } from "src/app/models/company.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-edit-company',
    templateUrl: 'edit-company.page.html',
    styleUrls: ['edit-company.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class CompanyEditPage implements OnInit {
    company = new Company();
    edit = false;

    constructor(private apiSvc: ApiService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.getFilm(this.route.snapshot.paramMap.get('id'));
    }

    getFilm(idCompany: string) {
        this.apiSvc.get(`api/Companies/${idCompany}`).subscribe(data => {
            this.company = data;
        });
    } 

    editMode() {
        this.edit = true;
    }
    
    updateCompany() {
        this.apiSvc.put(`api/Companies/${this.company.id}`, this.company).subscribe(() => {
            this.router.navigateByUrl(`/companies/${this.company.id}`);
        });
        this.edit = false;
    }

    deleteCompany(company: Company) {
        this.apiSvc.put(`api/Companies/${company.id}/Change-Status-To-Inactive`).subscribe(() => {
            this.router.navigateByUrl('/companies');
        });
    }
}