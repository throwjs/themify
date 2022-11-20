import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThemifyLayoutComponent } from '@throwjs/themify/themify-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@throwjs/themify/core';
import { ThemeEnum } from '@throwjs/themify/interfaces';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({
      application: {
        name: 'Themify',
      },
      layout: {
        header: {
          type: 'floating',
        },
        sidebar: {
          collapsed: true,
        },
        theme: ThemeEnum.DARK,
      },
    }),
    ThemifyLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
