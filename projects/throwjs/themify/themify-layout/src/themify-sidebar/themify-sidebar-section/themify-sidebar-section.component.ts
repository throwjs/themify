import { Component, Input, OnInit } from '@angular/core';
import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';

@Component({
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
export class ThemifySidebarSectionComponent implements OnInit {
  @Input() sectionName: string;

  constructor() {
    this.sectionName = '';
  }

  ngOnInit(): void {}
}
