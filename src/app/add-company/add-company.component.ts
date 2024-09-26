import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent{

  company: Company = new Company();
  constructor(private companyService: CompanyService, private router: Router ){}

  saveCompany(){
    console.log("saveComp");
    this.companyService.addCompany(this.company).subscribe({
      next: data => console.log(this.company),
      error: err => console.log(err),
      complete: () => console.log("complete")
    });
    this.goToCompany();
  }
  
  onSubmitAddCompany(){
    console.log("inside onSubmitAddCompany meth");
    this.saveCompany();
  }
  goToCompany(){
    this.router.navigate(['/company']);
  }

 

}
