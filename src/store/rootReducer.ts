import { combineReducers } from "@reduxjs/toolkit";

import login from "./reducers/login";
import learning from "./reducers/learnings";
import matchMaking from "./reducers/matchMaking";

const rootReducer = combineReducers({
    login,
    learning,
    matchMaking,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
