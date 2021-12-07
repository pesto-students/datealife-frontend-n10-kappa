import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { CREATE_USER_REQUEST, FETCH_USER_REQUEST, UPDATE_USER_REQUEST } from "./actionTypes";
import { CreateUserRequest, FetchUserRequest, FetchUserRequestPayload, UpdateUserRequest, UserInfo } from "./types";
import { loginSuccessful, updateError } from "../../reducers/login";
import { API_BASE_URL } from "../../../const";

const getUserApi = ({ userId }: FetchUserRequestPayload) => axios.get<UserInfo>(`${API_BASE_URL}/user/${userId}`);

const postUserApi = (user: UserInfo) => axios.post<UserInfo>(`${API_BASE_URL}/user`, user);

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* fetchUserSaga({ payload }: FetchUserRequest) {
    try {
        const response: AxiosResponse<UserInfo> = yield call(getUserApi, payload);
        const userData = response.data;

        yield put(
            loginSuccessful({
                isLoggedIn: true,
                user: userData || {},
                isExitingUser: !!response.data,
            })
        );
    } catch (e: any) {
        yield put(
            updateError({
                error: e.message,
            })
        );
    }
}

/*
  Worker Saga: Fired on CREATE_USER_REQUEST action
*/
function* createUserSaga({ payload }: CreateUserRequest | UpdateUserRequest) {
    try {
        const response: AxiosResponse<UserInfo> = yield call(postUserApi, payload);
        const userData = response.data;
        if (!userData) {
            throw new Error("Not able to create user");
        }
        yield put(
            loginSuccessful({
                isLoggedIn: !!response.data,
                user: userData,
                isExitingUser: !!response.data,
            })
        );
    } catch (e: any) {
        yield put(
            updateError({
                error: e.message,
            })
        );
    }
}

function* userSaga(): any {
    yield all([
        takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
        takeLatest(CREATE_USER_REQUEST, createUserSaga),
        takeLatest(UPDATE_USER_REQUEST, createUserSaga),
    ]);
}

export default userSaga;
