import { Component, Input } from '@angular/core';
import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[themify-sidebar-section]',
  standalone: true,
  imports: [ThemifyIconComponent],
  template: `
    <ng-container>
      <span>{{ sectionName }}</span>
      <themify-icon [size]="18" name="more-horizontal"></themify-icon>
    </ng-container>
  `,
  styleUrls: ['./themify-sidebar-section.component.scss'],
  host: {
    class: 'navigation__section',
  },
})
export class ThemifySidebarSectionComponent {
  @Input() sectionName: string;

  constructor() {
    this.sectionName = '';
  }
}
