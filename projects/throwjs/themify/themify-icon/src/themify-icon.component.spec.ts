import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifyIconComponent } from './themify-icon.component';

describe('ThemifyIconComponent', () => {
  let component: ThemifyIconComponent;
  let fixture: ComponentFixture<ThemifyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ThemifyIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemifyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
