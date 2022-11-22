import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IProfile } from '@throwjs/themify/interfaces';
import { ProfileService } from '@throwjs/themify/services';
import { ThemifyIconComponent } from '@throwjs/themify/themify-icon';
import { Observable } from 'rxjs';

@Component({
  selector: 'themify-profile',
  standalone: true,
  imports: [ThemifyIconComponent, CommonModule],
  templateUrl: './themify-profile.component.html',
  styleUrls: ['./themify-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'profile',
  },
})
export class ThemifyProfileComponent implements OnInit {
  profile$: Observable<IProfile | null>;

  constructor(private _profileService: ProfileService) {
    this.profile$ = new Observable();
  }

  ngOnInit(): void {
    this.profile$ = this._profileService.profile$;
  }
}
