import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifySidebarComponent } from './themify-sidebar.component';

describe('ThemifySidebarComponent', () => {
  let component: ThemifySidebarComponent;
  let fixture: ComponentFixture<ThemifySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemifySidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemifySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
