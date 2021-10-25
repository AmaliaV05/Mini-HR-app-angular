import { Company } from "./company.model";

export class CompanyParams {    
    pageNumber = 1;
    pageSize = 5;
    minYearOfEstablishment: number;
    maxYearOfEstablishment: number;
  
    constructor(company: Company) {
      this.minYearOfEstablishment;
      this.maxYearOfEstablishment;
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