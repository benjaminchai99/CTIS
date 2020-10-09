import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTcoComponent } from './register-tco.component';

describe('RegisterTcoComponent', () => {
  let component: RegisterTcoComponent;
  let fixture: ComponentFixture<RegisterTcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
