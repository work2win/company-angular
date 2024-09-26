import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { HeaderCompanyComponent } from './header-company/header-company.component';
import { JobstatusCompanyComponent } from './jobstatus-company/jobstatus-company.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    AddCompanyComponent,
    HeaderCompanyComponent,
    JobstatusCompanyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //this is very imp module to display the data
    AppRoutingModule,
    FormsModule, // this is imp if you adding forms
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
