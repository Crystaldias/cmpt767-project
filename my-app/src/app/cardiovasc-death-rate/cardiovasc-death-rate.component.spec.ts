import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiovascDeathRateComponent } from './cardiovasc-death-rate.component';

describe('CardiovascDeathRateComponent', () => {
  let component: CardiovascDeathRateComponent;
  let fixture: ComponentFixture<CardiovascDeathRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardiovascDeathRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardiovascDeathRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
