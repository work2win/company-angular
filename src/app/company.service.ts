import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompany(): Observable<Company[]>{
   // console.log("here");
    return this.httpClient.get<Company[]>("http://localhost:9091/company");
  }

  addCompany(company: Company): Observable<Company[]>{
    return this.httpClient.post<Company[]>("http://localhost:9091/company",company);
  }

  deleteCompany(id: Number): Observable<Object>{
    const url = "http://localhost:9091/company/"+id;
    console.log(url);
    return this.httpClient.delete(url);
  }

  statusCompany(status: String): Observable<Object>{
    const url = "http://localhost:9091/company/"+status;
    return this.httpClient.get(url);
  }
}
