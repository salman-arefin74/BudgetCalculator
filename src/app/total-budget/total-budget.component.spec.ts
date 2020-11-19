import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBudgetComponent } from './total-budget.component';

describe('TotalBudgetComponent', () => {
  let component: TotalBudgetComponent;
  let fixture: ComponentFixture<TotalBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
