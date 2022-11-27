import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifyInputComponent } from './themify-input.component';

describe('ThemifyInputComponent', () => {
  let component: ThemifyInputComponent;
  let fixture: ComponentFixture<ThemifyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemifyInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemifyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
