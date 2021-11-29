import { all, fork } from "redux-saga/effects";

import userSaga from "./sagas/user";

export function* rootSaga(): any {
    yield all([fork(userSaga)]);
}
