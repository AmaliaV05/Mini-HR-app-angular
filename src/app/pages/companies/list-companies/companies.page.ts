import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanyParams, Pagination } from 'src/app/models/pagination.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-companies',
    templateUrl: 'companies.page.html',
    styleUrls: ['companies.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class CompaniesComponent implements OnInit {
  companies: Array<Company>;
  pagination: Pagination;
  companyParams: CompanyParams;
  company: Company;
  totalItems: any;
  currentPage: any;
  columnsToDisplay = ['position','name', 'fiscalCode', 'activity', 'action'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @Input() fieldvalue = '';
  constructor(private apiSvc: ApiService, private router: Router) { 
    this.companyParams = new CompanyParams(this.company);
  }
  
  ngOnInit() {
      this.getCompanies();      
  }

  goToAddCompany() {
    this.router.navigateByUrl('companies/add');
  }

  public handlePage(e: any) {
    this.pagination.currentPage = e.pageIndex;    
    this.companyParams.pageSize = e.pageSize;
    this.iterator();  
  }

  getCompanies() {
    this.apiSvc.getCompanies(this.companyParams).subscribe(response => {
      this.dataSource = new MatTableDataSource<Company>(response.result);
      this.companies = response.result;
      this.pagination = response.pagination;
      this.totalItems = response.pagination.totalItems;
      this.currentPage = response.pagination.currentPage;
      this.iterator();      
    })
  }

  private iterator() {
    const end = (this.pagination.currentPage + 1) * this.companyParams.pageSize;
    const start = this.pagination.currentPage * this.companyParams.pageSize;
    const part = this.companies.slice(start, end);
    this.dataSource = part;
  }
}