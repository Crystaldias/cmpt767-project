import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaVaccinationSplineComponent } from './africa-vaccination-spline.component';

describe('AfricaVaccinationSplineComponent', () => {
  let component: AfricaVaccinationSplineComponent;
  let fixture: ComponentFixture<AfricaVaccinationSplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfricaVaccinationSplineComponent]
    });
    fixture = TestBed.createComponent(AfricaVaccinationSplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
