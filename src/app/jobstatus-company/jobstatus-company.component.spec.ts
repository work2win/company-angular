import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobstatusCompanyComponent } from './jobstatus-company.component';

describe('JobstatusCompanyComponent', () => {
  let component: JobstatusCompanyComponent;
  let fixture: ComponentFixture<JobstatusCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobstatusCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobstatusCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
