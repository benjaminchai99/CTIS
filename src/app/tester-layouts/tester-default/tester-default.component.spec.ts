import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterDefaultComponent } from './tester-default.component';

describe('TesterDefaultComponent', () => {
  let component: TesterDefaultComponent;
  let fixture: ComponentFixture<TesterDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
