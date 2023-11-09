import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthamericaHospitalizationLineComponent } from './northamerica-hospitalization-line.component';

describe('NorthamericaHospitalizationLineComponent', () => {
  let component: NorthamericaHospitalizationLineComponent;
  let fixture: ComponentFixture<NorthamericaHospitalizationLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthamericaHospitalizationLineComponent]
    });
    fixture = TestBed.createComponent(NorthamericaHospitalizationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
