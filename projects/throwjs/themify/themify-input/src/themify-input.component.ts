import { Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'themify-input',
  templateUrl: './themify-input.component.html',
  styleUrls: ['./themify-input.component.scss'],
})
export class ThemifyInputComponent {
  @HostBinding('class') class = 'themify-input';

  @Input() label: string;

  constructor() {
    this.label = 'Label';
  }
}
