import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesPrevalenceComponent } from './diabetes-prevalence.component';

describe('DiabetesPrevalenceComponent', () => {
  let component: DiabetesPrevalenceComponent;
  let fixture: ComponentFixture<DiabetesPrevalenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiabetesPrevalenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiabetesPrevalenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
