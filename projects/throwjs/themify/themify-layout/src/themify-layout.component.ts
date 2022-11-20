import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ConfigService } from '@throwjs/themify/core';
import { IConfig } from '@throwjs/themify/interfaces';
import { ThemifyHeaderComponent } from './themify-header';
import { ThemifySidebarComponent } from './themify-sidebar';

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
    private _breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private _renderer2: Renderer2
  ) {
    this.config = null;
    this.isMobile = false;
  }

  ngOnInit(): void {
    this._configService.configObservable$.subscribe((config) => {
      this.config = config;
      this.changeTheme();
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

  changeTheme(): void {
    const classTheme = this.config?.layout.theme || 'ligth';

    this._renderer2.removeClass(this.document.body, 'dark');
    this._renderer2.removeClass(this.document.body, 'ligth');

    // this._renderer2.

    // this._renderer2.removeClass(this.document.body, classTheme)

    this._renderer2.addClass(this.document.body, classTheme);
  }
}
