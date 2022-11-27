import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifyProfileComponent } from './themify-profile.component';

describe('ThemifyProfileComponent', () => {
  let component: ThemifyProfileComponent;
  let fixture: ComponentFixture<ThemifyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemifyProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemifyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
