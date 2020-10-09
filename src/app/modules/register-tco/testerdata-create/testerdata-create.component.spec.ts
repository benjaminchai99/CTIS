import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterdataCreateComponent } from './testerdata-create.component';

describe('TesterdataCreateComponent', () => {
  let component: TesterdataCreateComponent;
  let fixture: ComponentFixture<TesterdataCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterdataCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterdataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
