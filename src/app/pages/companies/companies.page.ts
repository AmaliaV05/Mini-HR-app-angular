import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatPaginatorDefaultOptions } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Company } from 'src/app/models/company.model';
import { CompanyParams, Pagination } from 'src/app/models/pagination.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-companies',
    templateUrl: 'companies.page.html',
    styleUrls: ['companies.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class CompaniesPage implements AfterViewInit, OnInit, OnDestroy {
  companies: Array<Company>;
  pagination: Pagination;
  companyParams: CompanyParams;
  company: Company;
  columnsToDisplay = ['position','name', 'fiscalCode', 'activity', 'action'];
  dataSource = new MatTableDataSource<Company>();

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private apiSvc: ApiService, private router: Router) { 
    this.companyParams = new CompanyParams(this.company)
  }
  
  ngOnInit() {
      this.getCompanies();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {

  }

  goToAddCompany() {
    this.router.navigateByUrl('companies/add');
  }

  getCompanies() {
    this.apiSvc.getCompanies(this.companyParams).subscribe(response => {
      this.companies = response.result;
      this.pagination = response.pagination;
      this.dataSource = new MatTableDataSource(response.result);
    })
  }
}