import { all, fork } from 'redux-saga/effects';

import userSaga from './user/sagas';

export function* rootSaga() {
	yield all([fork(userSaga)]);
}
