import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatPaginatorDefaultOptions } from '@angular/material/paginator';
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

export class CompaniesPage implements OnInit, OnDestroy {
  companies: Array<Company>;
  pagination: Pagination;
  companyParams: CompanyParams;
  company: Company;
  columnsToDisplay = ['position','name', 'fiscalCode', 'activity', 'action'];

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiSvc: ApiService, private router: Router) { 
    this.companyParams = new CompanyParams(this.company)
  }
  
  ngOnInit() {
      this.loadCompanies();
  }

  // ngAfterViewInit() {
  //   this.paginator.page
  //   .pipe(
  //       tap(() => this.getCompanies())
  //   ).subscribe();
  // }

  ngOnDestroy() {

  }

  goToAddCompany() {
    this.router.navigateByUrl('companies/add');
  }
  
  private loadCompanies() {
    this.apiSvc.get('api/Companies/Active-Status').subscribe((response: Array<Company>) => {
      this.companies = response;
    });
  }

  getCompanies() {
    this.apiSvc.getCompanies(this.companyParams).subscribe(response => {
      this.companies = response.result;
      this.pagination = response.pagination;
      console.log(this.companies);
    })
  }

  // findCompanies(): Observable<Company[]> {
  //   return this.apiSvc.get('api/Companies/Active-Status', {
  //       params: new HttpParams()
  //           .set('minYearOfEstablishment', this.companyParams.minYearOfEstablishment.toString())
  //           .set('maxYearOfEstablishment', this.companyParams.maxYearOfEstablishment.toString())
  //           .set('pageNumber', this.companyParams.pageNumber.toString())
  //           .set('pageSize', this.companyParams.pageSize.toString())
  //   }).pipe(map(res =>  res["payload"]));
  // }
}