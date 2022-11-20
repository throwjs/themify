import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

import { INavItem } from '@throwjs/themify/interfaces';

import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';

import { SidebarService } from '@throwjs/themify/services';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[themify-sidebar-item]',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemifyIconComponent],
  templateUrl: './themify-sidebar-item.component.html',
  styleUrls: ['./themify-sidebar-item.component.scss'],
  host: {
    '(click)': 'toggleExpanded($event)',
    '[class.has__children]': 'item.children?.length',
    '[class.navigation__link-expanded]': 'expanded',
  },
})
export class ThemifySidebarItemComponent implements OnInit {
  @Input() item: INavItem;

  expanded: boolean;

  constructor(private _sidebarService: SidebarService, private _router: Router) {
    this.item = {
      iconName: '',
      title: '',
    };
    this.expanded = false;
  }

  ngOnInit(): void {
    this._router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        this._confirmUrlInChildren(this.item, route.url) ? this._open() : this._close();
      });

    this._sidebarService.onSelectedItem$.subscribe((clickedItem) => {
      if (clickedItem && clickedItem.children) {
        // Check if the clicked item is one of the children of this item
        // or
        // // Check if the url can be found in one of the children of this item
        if (
          this._confirmItemInChildren(this.item, clickedItem) ||
          this._confirmUrlInChildren(this.item, this._router.url)
        ) {
          return;
        }

        // If the clicked item is not this item, collapse...
        if (this.item !== clickedItem) {
          this._close();
        }
      }
    });
  }

  toggleExpanded(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this._sidebarService.setSelectedItem(this.item);

    if (this.item.children?.length) {
      this.expanded = !this.expanded;
    }
  }

  private _close(): void {
    if (!this.expanded) return;
    this.expanded = false;
  }

  private _open(): void {
    if (this.expanded) return;
    this.expanded = true;
  }

  private _confirmItemInChildren(parent: INavItem, item: INavItem): boolean {
    const children = parent.children;

    // Return false if parent don't have any children
    if (!children) {
      return false;
    }

    // Return true parent has the provided item in one of its children
    if (children.indexOf(item) > -1) {
      return true;
    }

    for (const child of children) {
      if (child.children) {
        // Call function again with child (for sub to sub item)
        if (this._confirmItemInChildren(child, item)) {
          return true;
        }
      }
    }

    return false;
  }

  private _confirmUrlInChildren(parent: INavItem, url: string): boolean {
    const children = parent.children;

    // Return false if parent don't have any children
    if (!children) return false;

    // Loop all the children
    for (const child of children) {
      // If children has child (Sub to sub item url)
      if (child.children) {
        // Call function again with child
        if (this._confirmUrlInChildren(child, url)) return true;
      }

      // If child.url is same as provided url
      if (child.route && (child.route === url || url.includes(child.route))) return true;
    }

    return false;
  }
}
