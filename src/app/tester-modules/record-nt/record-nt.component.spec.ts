import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordNtComponent } from './record-nt.component';

describe('RecordNtComponent', () => {
  let component: RecordNtComponent;
  let fixture: ComponentFixture<RecordNtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordNtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordNtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
