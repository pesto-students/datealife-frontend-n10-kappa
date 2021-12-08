import { combineReducers } from "@reduxjs/toolkit";

import user from "./reducers/user";
import learning from "./reducers/learnings";
import matchMaking from "./reducers/matchMaking";

const rootReducer = combineReducers({
    user,
    learning,
    matchMaking,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
