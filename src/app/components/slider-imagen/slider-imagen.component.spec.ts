import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImagenComponent } from './slider-imagen.component';

describe('SliderImagenComponent', () => {
  let component: SliderImagenComponent;
  let fixture: ComponentFixture<SliderImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
