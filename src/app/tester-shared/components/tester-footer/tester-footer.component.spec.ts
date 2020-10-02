import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterFooterComponent } from './tester-footer.component';

describe('TesterFooterComponent', () => {
  let component: TesterFooterComponent;
  let fixture: ComponentFixture<TesterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
