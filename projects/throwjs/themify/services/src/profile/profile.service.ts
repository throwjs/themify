import { Injectable } from '@angular/core';
import { IProfile } from '@throwjs/themify/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _profile: BehaviorSubject<IProfile | null>;

  constructor() {
    this._profile = new BehaviorSubject<IProfile | null>(null);
  }

  get profile$(): Observable<IProfile | null> {
    return this._profile.asObservable();
    // .pipe(filter((profile: IProfile | null): profile is IProfile => !!profile));
  }

  set profile(newProfile: IProfile) {
    this._profile.next(newProfile);
  }
}
