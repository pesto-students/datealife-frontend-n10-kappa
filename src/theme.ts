import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Theme {
    status: {
      danger: string;
    };
    pallete: {
      primary: {
          main: string;
        };
        secondary: {
          main: string;
        };
        error: {
          main: string;
        };
        info: {
          main: string;
        };
        success: {
          main: string;
        };
        contrastThreshold: number;
        tonalOffset: number;
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    pallete?: {
      primary?: {
          main?: string;
        };
        secondary?: {
          main?: string;
        };
        error?: {
          main?: string;
        };
        info?: {
          main?: string;
        };
        success?: {
          main?: string;
        };
        contrastThreshold: number;
        tonalOffset: number;
    };
  }
}

export default createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#9B8AF4",
    },
    secondary: {
      main: "#F66699",
    },
    error: {
      main: "#F56E65",
    },
    info: {
      main: "#00B1CD",
    },
    success: {
      main: "#29AE62",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
