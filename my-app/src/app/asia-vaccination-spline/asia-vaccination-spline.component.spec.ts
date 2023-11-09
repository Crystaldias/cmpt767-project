import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaVaccinationSplineComponent } from './asia-vaccination-spline.component';

describe('AsiaVaccinationSplineComponent', () => {
  let component: AsiaVaccinationSplineComponent;
  let fixture: ComponentFixture<AsiaVaccinationSplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsiaVaccinationSplineComponent]
    });
    fixture = TestBed.createComponent(AsiaVaccinationSplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
