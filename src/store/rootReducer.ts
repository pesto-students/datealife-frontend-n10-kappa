import { combineReducers } from "@reduxjs/toolkit";

import login from "./reducers/login";
import learning from "./reducers/learnings";


const rootReducer = combineReducers({
    login,
    learning
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
