import { CompanyService } from './../company.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Company } from '../company';



@Component({  
  selector: 'app-jobstatus-company',
  templateUrl: './jobstatus-company.component.html',
  styleUrl: './jobstatus-company.component.css'  
  
})
export class JobstatusCompanyComponent implements OnInit{

  company!: Company[];
  constructor(private companyService: CompanyService){}
  
  status = "closed";
  
  ngOnInit(): void{
    status = "closed";
    this.statusData(status);
    //this.getCompany();
  }
  
  private getCompany(){
    this.companyService.getCompany().subscribe(data => {
      this.company = data;
      console.log(data);
    })
  }
  
  private statusData(status: string | String){
   console.log(status);
    this.companyService.statusCompany(status).subscribe(data => {
     console.log(data);
      this.company = Object.values(data);
    })
  }
  onChanged(){
    status = this.status;
    console.log("onchange"+status);
    this.companyService.statusCompany(status).subscribe(data => {
     // console.log(data);
     this.company = Object.values(data);
    })
    //console.log(this.status);   
  }
  
  
  
  
    
    
  
}
