import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeHospitalizationLineComponent } from './europe-hospitalization-line.component';

describe('EuropeHospitalizationLineComponent', () => {
  let component: EuropeHospitalizationLineComponent;
  let fixture: ComponentFixture<EuropeHospitalizationLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuropeHospitalizationLineComponent]
    });
    fixture = TestBed.createComponent(EuropeHospitalizationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
