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

import { INavSection } from '@throwjs/themify/interfaces';
import { SidebarService } from '@throwjs/themify/services';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ThemifySidebarItemComponent } from './themify-sidebar-item';
import { ThemifySidebarSectionComponent } from './themify-sidebar-section';
import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';

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

  menu: INavSection[];

  isExpandedOnHover: boolean;

  sidebarOpenInMobile: boolean;

  constructor(private _sidebarService: SidebarService) {
    this.isCollapsed = true;
    this.isExpandedOnHover = false;
    this.isMobile = false;
    this.sidebarOpenInMobile = false;
    this.menu = [
      {
        sectionItems: [
          {
            title: 'Dashboard 1',
            iconName: 'home',
            children: [
              {
                title: 'eCommerce',
                iconName: 'circle',
                children: [
                  {
                    title: 'Test',
                    iconName: 'test',
                    route: '/dashboard/test',
                  },
                ],
              },
            ],
          },
          {
            title: 'Dashboard 2',
            iconName: 'home',
            children: [
              {
                title: 'Analytics',
                iconName: 'circle',
                route: '/dashboard/analytics',
              },
            ],
          },
        ],
      },
      {
        sectionName: 'Menus',
        sectionItems: [
          {
            title: 'Menu Levels',
            iconName: 'menu',
            children: [
              {
                title: 'Second Level',

                iconName: 'circle',
                route: '#',
              },
              {
                title: 'Second Level',
                iconName: 'circle',
                children: [
                  {
                    title: 'Third Level',
                    route: '#',
                  },
                  {
                    title: 'Third Level',
                    route: '#',
                    children: [
                      {
                        title: 'Third Level',
                        route: '#',
                      },
                      {
                        title: 'Third Level',
                        route: '#',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        sectionName: 'APP & PAGES',
        sectionItems: [
          {
            title: 'Email',
            iconName: 'mail',
          },
          {
            title: 'Chat',
            iconName: 'message-square',
          },
          {
            title: 'Todo',
            iconName: 'check-square',
          },
          {
            title: 'Calendar',
            iconName: 'calendar',
          },
          {
            title: 'Pages',
            iconName: 'file-text',
            children: [
              {
                title: 'Authentication',
              },
            ],
          },
          {
            title: 'Email',
            iconName: 'mail',
          },
          {
            title: 'Chat',
            iconName: 'message-square',
          },
          {
            title: 'Todo',
            iconName: 'check-square',
          },
          {
            title: 'Calendar',
            iconName: 'calendar',
          },
          {
            title: 'Pages',
            iconName: 'file-text',
            children: [
              {
                title: 'Authentication',
              },
            ],
          },
        ],
      },
      // {
      //   sectionName: 'APP & PAGES',
      //   sectionItems: [
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   sectionName: 'APP & PAGES',
      //   sectionItems: [
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];
  }

  ngOnInit(): void {
    this._sidebarService.sidebarIsOpenInMobile$.subscribe(
      (isOpen) => (this.sidebarOpenInMobile = isOpen)
    );
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
