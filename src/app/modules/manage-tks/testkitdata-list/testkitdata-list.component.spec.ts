import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestkitdataListComponent } from './testkitdata-list.component';

describe('TestkitdataListComponent', () => {
  let component: TestkitdataListComponent;
  let fixture: ComponentFixture<TestkitdataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestkitdataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestkitdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
