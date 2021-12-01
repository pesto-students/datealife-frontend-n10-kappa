import { all, fork } from "redux-saga/effects";

import userSaga from "./sagas/user";
import learningSaga from "./sagas/learning";

export function* rootSaga(): any {
    yield all([fork(userSaga), fork(learningSaga)]);
}
