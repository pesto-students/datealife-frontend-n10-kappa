import { all, fork } from "redux-saga/effects";

import userSaga from "./sagas/user";
import learningSaga from "./sagas/learning";
import matchMakingSaga from "./sagas/match-making";
import interestsSaga from "./sagas/interests";

export function* rootSaga(): any {
    yield all([fork(userSaga), fork(learningSaga), fork(matchMakingSaga), fork(interestsSaga)]);
}
