import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'themify-card',
  templateUrl: './themify-card.component.html',
  styleUrls: ['./themify-card.component.scss'],
})
export class ThemifyCardComponent {
  @HostBinding('class') class = 'themify-card';
}
