import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemifyCardComponent } from '@throwjs/themify/themify-card';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, ThemifyCardComponent],
  template: `<themify-card>
    <p style="margin: 0">test works!</p>
  </themify-card>`,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
