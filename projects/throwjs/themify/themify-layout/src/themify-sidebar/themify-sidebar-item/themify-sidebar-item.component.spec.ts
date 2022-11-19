import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifySidebarItemComponent } from './themify-sidebar-item.component';

describe('ThemifySidebarItemComponent', () => {
  let component: ThemifySidebarItemComponent;
  let fixture: ComponentFixture<ThemifySidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemifySidebarItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemifySidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
