import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationContainerComponent } from './vaccination-container.component';

describe('VaccinationContainerComponent', () => {
  let component: VaccinationContainerComponent;
  let fixture: ComponentFixture<VaccinationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccinationContainerComponent]
    });
    fixture = TestBed.createComponent(VaccinationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
