import { Company } from "./company.model";

export class CompanyParams {    
    pageNumber = 1;
    pageSize = 20;
    minYear = 1900;
    maxYear = new Date().getFullYear();
    companyName: string;
  
    constructor(company: Company) {
      this.companyName = "";
    }
}  
  
export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
} 

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}