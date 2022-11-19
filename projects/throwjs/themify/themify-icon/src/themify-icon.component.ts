import { Component, Input } from '@angular/core';
import { ThemifyIconModule } from './themify-icon.module';

@Component({
  standalone: true,
  imports: [ThemifyIconModule],
  selector: 'themify-icon',
  template: ` <i-feather
    [style.width]="size + 'px'"
    [style.height]="size + 'px'"
    [name]="name"
  ></i-feather>`,
})
export class ThemifyIconComponent {
  @Input() name: string;

  @Input() size: number;

  constructor() {
    this.name = '';
    this.size = 24;
  }
}
