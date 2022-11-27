import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifyCardComponent } from './themify-card.component';

describe('ThemifyCardComponent', () => {
  let component: ThemifyCardComponent;
  let fixture: ComponentFixture<ThemifyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemifyCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemifyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
