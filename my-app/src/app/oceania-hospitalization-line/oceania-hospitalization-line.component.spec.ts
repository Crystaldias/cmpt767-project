import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaHospitalizationLineComponent } from './oceania-hospitalization-line.component';

describe('OceaniaHospitalizationLineComponent', () => {
  let component: OceaniaHospitalizationLineComponent;
  let fixture: ComponentFixture<OceaniaHospitalizationLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OceaniaHospitalizationLineComponent]
    });
    fixture = TestBed.createComponent(OceaniaHospitalizationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
