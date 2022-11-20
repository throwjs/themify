import { Component } from '@angular/core';
import { MenuService } from '@throwjs/themify/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';

  constructor(private _menuService: MenuService) {
    this._menuService.menu = [
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
}
