import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeVaccinationSplineComponent } from './europe-vaccination-spline.component';

describe('EuropeVaccinationSplineComponent', () => {
  let component: EuropeVaccinationSplineComponent;
  let fixture: ComponentFixture<EuropeVaccinationSplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuropeVaccinationSplineComponent]
    });
    fixture = TestBed.createComponent(EuropeVaccinationSplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
