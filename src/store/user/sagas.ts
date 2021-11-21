import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUserFailure, fetchUserSuccess } from "./actions";
import { FETCH_USER_REQUEST } from "./actionTypes";
import { IUser } from "./types";

const getUsers = () => axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* fetchUserSaga() {
    try {
        const response: AxiosResponse<IUser[]> = yield call(getUsers);
        yield put(
            fetchUserSuccess({
                users: response.data,
            })
        );
    } catch (e) {
        yield put(
            fetchUserFailure({
                error: e.message,
            })
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_USER_REQUEST` action.
  Allows concurrent increments.
*/
function* userSaga(): any {
    yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
