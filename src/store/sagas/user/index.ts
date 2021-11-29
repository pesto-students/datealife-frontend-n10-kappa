import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_BASE_URL } from "../../../const";
import { loginSuccessful } from "../../reducers/login";

import { fetchUserFailure } from "./actions";
import { FETCH_USER_REQUEST } from "./actionTypes";
import { FetchUserRequest, IUser } from "./types";

const getUsers = (userId: string | null | undefined) => axios.get<IUser[]>(`${API_BASE_URL}/user/${userId}`);

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* fetchUserSaga({ payload: { user } }: FetchUserRequest) {
    try {
        const response: AxiosResponse<IUser[]> = yield call(getUsers, user.uid);
        const userData = response.data || user;
        yield put(
            loginSuccessful({
                isLoggedIn: !!response.data,
                user: userData,
                isExitingUser: !!response.data,
            })
        );
    } catch (e: any) {
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
