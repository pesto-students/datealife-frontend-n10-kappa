import { combineReducers } from "@reduxjs/toolkit";

import user from "./reducers/user";
import learning from "./reducers/learnings";
import matchMaking from "./reducers/matchMaking";
import interests from "./reducers/interests";
const rootReducer = combineReducers({
    user,
    learning,
    matchMaking,
    interests
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
