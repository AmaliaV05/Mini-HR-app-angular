import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class ApiService {
    API_URL = 'https://localhost:5001/';
    constructor(private httpClient: HttpClient) {}

    get(path: string): Observable<any> {
        return this.httpClient.get(`${this.API_URL}${path}`);
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
}