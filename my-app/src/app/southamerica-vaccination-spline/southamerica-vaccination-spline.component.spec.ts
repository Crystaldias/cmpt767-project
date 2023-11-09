import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthamericaVaccinationSplineComponent } from './southamerica-vaccination-spline.component';

describe('SouthamericaVaccinationSplineComponent', () => {
  let component: SouthamericaVaccinationSplineComponent;
  let fixture: ComponentFixture<SouthamericaVaccinationSplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthamericaVaccinationSplineComponent]
    });
    fixture = TestBed.createComponent(SouthamericaVaccinationSplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
