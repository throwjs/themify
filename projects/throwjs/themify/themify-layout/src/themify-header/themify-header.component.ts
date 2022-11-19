import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';

import { ConfigService } from '@throwjs/themify/core';
import { SidebarService } from '@throwjs/themify/services';

@Component({
  selector: 'themify-header',
  standalone: true,
  imports: [ThemifyIconComponent],
  templateUrl: './themify-header.component.html',
  styleUrls: ['./themify-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemifyHeaderComponent implements OnInit {
  private _expanded: boolean;

  @Input() isMobile: boolean;

  constructor(
    private _configService: ConfigService,
    private _sidebarService: SidebarService
  ) {
    this._expanded = true;
    this.isMobile = false;
  }

  ngOnInit(): void {
    const sidebarOptions = this._configService.config?.layout.sidebar;
    if (sidebarOptions) this._expanded = sidebarOptions.collapsed;
  }

  toggleSidebar(): void {
    console.log(this.isMobile);
    if (!this.isMobile) {
      this._expanded = !this._expanded;
      this._configService.setconfig({
        layout: { sidebar: { collapsed: this._expanded } },
      });
    } else {
      this._sidebarService.sidebarIsOpenInMobile = true;
    }
  }
}
