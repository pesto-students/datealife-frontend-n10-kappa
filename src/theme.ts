import { createTheme } from "@mui/material/styles";
import { PRIMARY_COLOR, SECONDARY_COLOR, ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR } from "./const";

declare module "@mui/material/styles" {
  export interface Theme {
    type: string;
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
    type?: string;
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
  type: "light",
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    error: {
      main: ERROR_COLOR,
    },
    info: {
      main: INFO_COLOR,
    },
    success: {
      main: SUCCESS_COLOR,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
