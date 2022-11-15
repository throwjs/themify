import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemifyHeaderComponent } from '@throwjs/themify/themify-header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemifyHeaderComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
