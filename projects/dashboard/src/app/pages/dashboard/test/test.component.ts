import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemifyCardComponent } from '@throwjs/themify/themify-card';
import { ThemifyInputComponent } from '@throwjs/themify/themify-input';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, ThemifyCardComponent, ThemifyInputComponent],
  template: `<themify-card>
    <p style="margin: 0">test works!</p>
    <themify-input></themify-input>
  </themify-card>`,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
