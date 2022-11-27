import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';

import { CommonModule } from '@angular/common';
import { ConfigService } from '@throwjs/themify/core';
import { IConfigLayoutTheme, IProfile, ThemeEnum } from '@throwjs/themify/interfaces';
import { SidebarService } from '@throwjs/themify/services';
import { Observable } from 'rxjs';
import { ThemifyProfileComponent } from '../themify-profile';

@Component({
  selector: 'themify-header',
  standalone: true,
  imports: [CommonModule, ThemifyIconComponent, ThemifyProfileComponent],
  templateUrl: './themify-header.component.html',
  styleUrls: ['./themify-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemifyHeaderComponent implements OnInit {
  private _expanded: boolean;

  @Input() isMobile: boolean;

  theme$: Observable<IConfigLayoutTheme>;

  profile$: Observable<IProfile>;

  currentTheme: IConfigLayoutTheme;

  themesEnum = ThemeEnum;

  constructor(private _configService: ConfigService, private _sidebarService: SidebarService) {
    this._expanded = true;
    this.isMobile = false;
    this.currentTheme = 'dark';
    this.theme$ = new Observable();
    this.profile$ = new Observable();
  }

  ngOnInit(): void {
    const sidebarOptions = this._configService.config?.layout.sidebar;
    if (sidebarOptions) this._expanded = sidebarOptions.collapsed;

    this._configService.configObservable$.subscribe(
      (theme) => (this.currentTheme = theme.layout.theme)
    );
  }

  toggleSidebar(): void {
    if (!this.isMobile) {
      this._expanded = !this._expanded;
      this._configService.setconfig({
        layout: { sidebar: { collapsed: this._expanded } },
      });
    } else {
      this._sidebarService.sidebarIsOpenInMobile = true;
    }
  }

  changeTheme(): void {
    const theme = this.currentTheme === ThemeEnum.DARK ? ThemeEnum.LIGTH : ThemeEnum.DARK;
    this._configService.setconfig({
      layout: { theme },
    });
  }
}
