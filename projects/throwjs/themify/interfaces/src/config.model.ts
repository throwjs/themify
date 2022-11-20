export interface IConfigApp {
  name: string;
  image?: string;
}

export interface IConfigLayout {}

export interface IConfigLayoutSidebar {
  collapsed: boolean;
}

export type IConfigLayoutTheme = 'dark' | 'ligth';

export type HeaderType = 'static' | 'sticky' | 'floating';
export interface IConfigLayoutHeader {
  type: HeaderType;
}

export interface IConfig {
  application: IConfigApp;
  layout: {
    sidebar: IConfigLayoutSidebar;
    theme: IConfigLayoutTheme;
    header: IConfigLayoutHeader;
  };
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
