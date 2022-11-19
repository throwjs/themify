import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemifyHeaderComponent } from './themify-header';
import { ThemifySidebarComponent } from './themify-sidebar';
import { IConfig } from '@throwjs/themify/interfaces';
import { ConfigService } from '@throwjs/themify/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'themify-layout',
  standalone: true,
  imports: [CommonModule, ThemifySidebarComponent, ThemifyHeaderComponent],
  templateUrl: './themify-layout.component.html',
  styleUrls: ['./themify-layout.component.scss'],
})
export class ThemifyLayoutComponent implements OnInit {
  config!: IConfig | null;

  isMobile: boolean;

  constructor(
    private _configService: ConfigService,
    private _breakpointObserver: BreakpointObserver
  ) {
    this.config = null;
    this.isMobile = false;
  }

  ngOnInit(): void {
    this._configService.configObservable$.subscribe((config) => {
      this.config = config;
      console.log(config);
    });

    this._breakpointObserver
      .observe(['(min-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 500px or greater!');
          this.isMobile = false;
        } else {
          console.log('Viewport width is less than 500px!');
          this.isMobile = true;
        }
      });
  }
}
