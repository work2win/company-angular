import { JobstatusCompanyComponent } from './jobstatus-company/jobstatus-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderCompanyComponent } from './header-company/header-company.component';

const routes: Routes = [
  {path: 'company', component: CompanyComponent},
  {path: 'header-company', component: HeaderCompanyComponent},  
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'jobstatus-company', component: JobstatusCompanyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
