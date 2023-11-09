import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthamericaHospitalizationLineComponent } from './southamerica-hospitalization-line.component';

describe('SouthamericaHospitalizationLineComponent', () => {
  let component: SouthamericaHospitalizationLineComponent;
  let fixture: ComponentFixture<SouthamericaHospitalizationLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthamericaHospitalizationLineComponent]
    });
    fixture = TestBed.createComponent(SouthamericaHospitalizationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
