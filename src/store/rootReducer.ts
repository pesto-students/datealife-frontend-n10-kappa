import { combineReducers } from "@reduxjs/toolkit";

import login from "./reducers/login";

const rootReducer = combineReducers({
    login,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
