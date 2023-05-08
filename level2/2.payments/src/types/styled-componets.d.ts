import 'styled-components';

declare module 'styled-components' {
  interface Theme {
    border: string;
    color: string;
    backgroundColor: string;
  }

  interface BankColors {
    [key: string]: string;
  }

  interface ZIndex {
    [key: string]: number;
  }

  export interface DefaultTheme {
    light: Theme;
    dark: Theme;
    blue: Theme;
    pale: Theme;
    banks: BankColors;
    zIndex: ZIndex;
  }
}
