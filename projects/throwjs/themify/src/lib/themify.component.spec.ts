import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiThemeComponent } from './themify.component';

describe('UiThemeComponent', () => {
  let component: UiThemeComponent;
  let fixture: ComponentFixture<UiThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiThemeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
