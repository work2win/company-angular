import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-header-company',
  templateUrl: './header-company.component.html',
  styleUrl: './header-company.component.css'
})
export class HeaderCompanyComponent implements OnInit{
  company!: Company[];
  constructor(private companyService: CompanyService){}

  ngOnInit(): void{
    this.getCompany();
  }

  private getCompany(){
    this.companyService.getCompany().subscribe(data => {
      this.company = data;
      console.log(data);
    })
  }

  deleteCompany(id: number){
    console.log("inside delete");
    this.companyService.deleteCompany(id).subscribe(data => {
      this.getCompany();
    })
  }
}

