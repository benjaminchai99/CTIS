import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestkitdataCreateComponent } from './testkitdata-create.component';

describe('TestkitdataCreateComponent', () => {
  let component: TestkitdataCreateComponent;
  let fixture: ComponentFixture<TestkitdataCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestkitdataCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestkitdataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
