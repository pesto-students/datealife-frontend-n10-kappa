import { all, fork } from "redux-saga/effects";

import userSaga from "./user/sagas";

export function* rootSaga(): any {
    yield all([fork(userSaga)]);
}
