import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaHospitalizationLineComponent } from './africa-hospitalization-line.component';

describe('AfricaHospitalizationLineComponent', () => {
  let component: AfricaHospitalizationLineComponent;
  let fixture: ComponentFixture<AfricaHospitalizationLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfricaHospitalizationLineComponent]
    });
    fixture = TestBed.createComponent(AfricaHospitalizationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
