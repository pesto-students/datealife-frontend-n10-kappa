import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import DateAdapter from "@mui/lab/AdapterMoment";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <LocalizationProvider dateAdapter={DateAdapter}>
                <MUIThemeProvider theme={theme}>
                    <ThemeProvider theme={theme}>
                        <Router>
                            <App />
                        </Router>
                    </ThemeProvider>
                </MUIThemeProvider>
            </LocalizationProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
