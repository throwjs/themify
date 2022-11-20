import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { INavSection } from '@throwjs/themify/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _menu: BehaviorSubject<INavSection[]>;

  constructor() {
    this._menu = new BehaviorSubject<INavSection[]>([]);
  }

  public get menu$(): Observable<INavSection[]> {
    return this._menu.asObservable();
  }

  public set menu(newMenu: INavSection[]) {
    this._menu.next(newMenu);
  }
}
