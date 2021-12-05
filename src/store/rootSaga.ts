import { all, fork } from "redux-saga/effects";

import userSaga from "./sagas/user";
import learningSaga from "./sagas/learning";
import matchMakingSaga from "./sagas/match-making";

export function* rootSaga(): any {
    yield all([fork(userSaga), fork(learningSaga), fork(matchMakingSaga)]);
}
