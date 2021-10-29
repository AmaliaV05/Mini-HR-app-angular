import { Company } from "./company.model";

export class CompanyParams {    
    pageNumber = 1;
    pageSize = 10;
    minYear = 1900;
    maxYear = new Date().getFullYear();
    companyName: string;
    sortByName: string;
    sortByDate: string;
  
    constructor(company: Company) {
      this.minYear;
      this.maxYear;
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