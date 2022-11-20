import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifyHeaderComponent } from './themify-header.component';

describe('ThemifyHeaderComponent', () => {
  let component: ThemifyHeaderComponent;
  let fixture: ComponentFixture<ThemifyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemifyHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemifyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
