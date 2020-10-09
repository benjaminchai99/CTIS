import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTksComponent } from './manage-tks.component';

describe('ManageTksComponent', () => {
  let component: ManageTksComponent;
  let fixture: ComponentFixture<ManageTksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
