import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterdataListComponent } from './testerdata-list.component';

describe('TesterdataListComponent', () => {
  let component: TesterdataListComponent;
  let fixture: ComponentFixture<TesterdataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterdataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
