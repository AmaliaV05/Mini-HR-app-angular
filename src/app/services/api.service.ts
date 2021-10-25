import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { CompanyParams, PaginatedResult } from "../models/pagination.model";
import { Company } from "../models/company.model";


@Injectable()
export class ApiService {
  API_URL = 'https://localhost:5001/';
  constructor(private httpClient: HttpClient) {}

  get(path: string, params?: any): Observable<any> {
      const headers = this.getHeaders();
      return this.httpClient.get(`${this.API_URL}${path}`, {
        headers,
        params: this.toHttpParams(params),
      });
    }
  
  post(path: string, body = {}): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.post(
      `${this.API_URL}${path}`,
      JSON.stringify(body),
      { headers }
    );
  }

  put(path: string, body = {}): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.put(`${this.API_URL}${path}`, JSON.stringify(body), {
      headers,
    });
  }

  private getHeaders() {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    } as any;

    return headers;
  }

  private toHttpParams(params): HttpParams {
    if (!params) {
      return new HttpParams();
    }
    return Object.getOwnPropertyNames(params).reduce(
      (p, key) => p.set(key, params[key]),
      new HttpParams()
    );
  }

  getCompanies(companyParams: CompanyParams) {

    let params = this.getPaginationHeaders(companyParams.pageNumber, companyParams.pageSize);
    params = params.append('minimum year', companyParams.minYearOfEstablishment);
    params = params.append('maximum year', companyParams.maxYearOfEstablishment);

    return this.getPaginatedResult<Company[]>(this.API_URL + 'Companies/Active-Status', params);
  }

  private getPaginatedResult<T>(url, params) {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    return this.httpClient.get<T>(url, { observe: 'response', params }).pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      }));
  }

  private getPaginationHeaders(pageNumber: number, pageSize: number) {
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());

    return params;
  }  
}