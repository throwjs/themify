import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifySidebarSectionComponent } from './themify-sidebar-section.component';

describe('SidebarSectionComponent', () => {
  let component: ThemifySidebarSectionComponent;
  let fixture: ComponentFixture<ThemifySidebarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemifySidebarSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemifySidebarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
