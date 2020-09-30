import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTCComponent } from './register-tc.component';

describe('RegisterTCComponent', () => {
  let component: RegisterTCComponent;
  let fixture: ComponentFixture<RegisterTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
