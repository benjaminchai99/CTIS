import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDefaultComponent } from './patients-default.component';

describe('PatientsDefaultComponent', () => {
  let component: PatientsDefaultComponent;
  let fixture: ComponentFixture<PatientsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
