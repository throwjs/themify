export interface IConfigApp {
  name: string;
  image?: string;
}

export interface IConfigLayout {
  sidebar: IConfigLayoutSidebar;
  theme: IConfigLayoutTheme;
  header: IConfigLayoutHeader;
}

export interface IConfigLayoutSidebar {
  collapsed: boolean;
}

const THEME_STATES = ['dark', 'ligth'] as const;

export enum ThemeEnum {
  DARK = 'dark',
  LIGTH = 'ligth',
}

export type IConfigLayoutTheme = typeof THEME_STATES[number];

export type HeaderType = 'static' | 'sticky' | 'floating';
export interface IConfigLayoutHeader {
  type: HeaderType;
}

export interface IConfig {
  application: IConfigApp;
  layout: IConfigLayout;
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
