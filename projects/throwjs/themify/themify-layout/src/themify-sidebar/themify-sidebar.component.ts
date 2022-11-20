import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { IConfigApp, INavSection } from '@throwjs/themify/interfaces';
import { MenuService, SidebarService } from '@throwjs/themify/services';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ThemifySidebarItemComponent } from './themify-sidebar-item';
import { ThemifySidebarSectionComponent } from './themify-sidebar-section';
import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';
import { ConfigService } from '@throwjs/themify/core';
import { distinctUntilKeyChanged, map, Observable } from 'rxjs';

@Component({
  selector: 'themify-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgScrollbarModule,
    ThemifySidebarItemComponent,
    ThemifySidebarSectionComponent,
    ThemifyIconComponent,
  ],
  templateUrl: './themify-sidebar.component.html',
  styleUrls: ['./themify-sidebar.component.scss'],
  host: {
    '[class.mobile]': 'isMobile',
    '[class.mobile-open]': 'isMobile && sidebarOpenInMobile',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemifySidebarComponent implements OnInit, OnChanges {
  @Input() isCollapsed: boolean;

  @Input() isMobile: boolean;

  @ViewChildren(ThemifySidebarItemComponent)
  sidebarItems!: QueryList<ThemifySidebarItemComponent>;

  @ViewChild('sidebar') sidebarRef!: ElementRef<HTMLDivElement>;

  menu$: Observable<INavSection[]>;

  isExpandedOnHover: boolean;

  sidebarOpenInMobile: boolean;

  app: IConfigApp | null;

  constructor(
    private _sidebarService: SidebarService,
    private _configService: ConfigService,
    private _menuService: MenuService
  ) {
    this.isCollapsed = true;
    this.isExpandedOnHover = false;
    this.isMobile = false;
    this.sidebarOpenInMobile = false;
    this.menu$ = new Observable();
    this.app = null;
  }

  ngOnInit(): void {
    this._sidebarService.sidebarIsOpenInMobile$.subscribe(
      (isOpen) => (this.sidebarOpenInMobile = isOpen)
    );

    this.menu$ = this._menuService.menu$;

    this._configService.configObservable$
      .pipe(
        distinctUntilKeyChanged('application'),
        map((config) => config.application)
      )
      .subscribe((app) => {
        this.app = app;
      });
  }

  ngOnChanges(): void {
    if (!this.isMobile) {
      this.sidebarOpenInMobile = false;
    }
  }

  closeSidebar(): void {
    this._sidebarService.sidebarIsOpenInMobile = false;
  }

  openExpandedSidebar(): void {
    if (this.isCollapsed && !this.isMobile) {
      this.isExpandedOnHover = true;
    }
  }

  closeExpandedSidebar(): void {
    if (this.isCollapsed && !this.isMobile) {
      this.isExpandedOnHover = false;
    }
  }
}
