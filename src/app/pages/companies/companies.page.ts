import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-companies',
    templateUrl: 'companies.page.html',
    styleUrls: ['companies.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class CompaniesPage implements OnInit, OnDestroy {
    companies: Array<Company>;
    columnsToDisplay = ['name'];

    constructor(private apiSvc: ApiService, private router: Router) { }
    
    ngOnInit() {
        this.loadCompanies();
    }

    ngOnDestroy() {

    }

    goToAddCompany() {
        this.router.navigateByUrl('companies/add');
    }

    deleteCompany(company: Company) {
        this.apiSvc.put(`api/Companies/${company.id}/Change-Status`).subscribe(() => {
          this.loadCompanies();
        });
    }
    
    private loadCompanies() {
      this.apiSvc.get('api/Companies').subscribe((response: Array<Company>) => {
        this.companies = response;
      });
    }
}