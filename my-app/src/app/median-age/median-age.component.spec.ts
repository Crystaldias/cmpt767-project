import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianAgeComponent } from './median-age.component';

describe('MedianAgeComponent', () => {
  let component: MedianAgeComponent;
  let fixture: ComponentFixture<MedianAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedianAgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedianAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
