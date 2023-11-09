import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaHospitalizationLineComponent } from './asia-hospitalization-line.component';

describe('AsiaHospitalizationLineComponent', () => {
  let component: AsiaHospitalizationLineComponent;
  let fixture: ComponentFixture<AsiaHospitalizationLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsiaHospitalizationLineComponent]
    });
    fixture = TestBed.createComponent(AsiaHospitalizationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

