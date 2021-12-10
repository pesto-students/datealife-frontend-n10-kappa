import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CometChat } from "@cometchat-pro/chat";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import App from "./App";
import theme from "./theme";
import store from "./store";
import { ErrorBoundary } from "./components";
import * as serviceWorker from "./serviceWorker";
import { COMETCHAT_CONSTANTS } from "./const";
import "./index.css";

const appID = COMETCHAT_CONSTANTS.APP_ID;
const region = COMETCHAT_CONSTANTS.REGION;

const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
    () => {
        if (CometChat.setSource) {
            CometChat.setSource("ui-kit", "web", "reactjs");
        }
        Sentry.init({
            dsn: "https://be578d0d6d184fe9a635ec6957611a3c@o1088109.ingest.sentry.io/6102661",
            integrations: [new Integrations.BrowserTracing()],

            // We recommend adjusting this value in production, or using tracesSampler
            // for finer control
            tracesSampleRate: 1.0,
        });
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <MUIThemeProvider theme={theme}>
                            <ThemeProvider theme={theme}>
                                <Router>
                                    <ErrorBoundary>
                                        <App />
                                    </ErrorBoundary>
                                </Router>
                            </ThemeProvider>
                        </MUIThemeProvider>
                    </LocalizationProvider>
                </Provider>
            </React.StrictMode>,
            document.getElementById("root")
        );
    },
    (error) => {
        // console.log("Initialization failed with error:", error);
        // Check the reason for error and take appropriate action.
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
