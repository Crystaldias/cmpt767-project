import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthamericaVaccinationSplineComponent } from './northamerica-vaccination-spline.component';

describe('NorthamericaVaccinationSplineComponent', () => {
  let component: NorthamericaVaccinationSplineComponent;
  let fixture: ComponentFixture<NorthamericaVaccinationSplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthamericaVaccinationSplineComponent]
    });
    fixture = TestBed.createComponent(NorthamericaVaccinationSplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
