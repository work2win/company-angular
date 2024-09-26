import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{

  company!: Company[];
  constructor(private companyService: CompanyService){}

  ngOnInit(): void{
    this.getCompany();
  }

  private getCompany(){
    this.companyService.getCompany().subscribe(data => {
      this.company = data;
      //console.log(data);
    })
  }

  deleteCompany(id: number){
    //console.log("inside delete");
    this.companyService.deleteCompany(id).subscribe(data => {
      this.getCompany();
    })
  }
}
