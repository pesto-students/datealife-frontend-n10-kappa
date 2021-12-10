import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_BASE_URL } from "../../../const";
import { saveInterests } from "../../reducers/interests";
import { updateLoading } from "../../reducers/user";
import { fetchInterestListFailure } from "./actions";
import { FETCH_INTEREST_REQUEST } from "./actionTypes";
import { Interests } from "./types";

const getInterests = () => axios.get<Interests[]>(`${API_BASE_URL}/interests`);

/*
  Worker Saga: Fired on FETCH_LEARNING_REQUEST action
*/
function* fetchInterestsSaga() {
    try {
        const response: AxiosResponse<Interests[]> = yield call(getInterests);
        const interestsData = response.data;
        yield put(
            saveInterests({
                interests: interestsData,
                loading: false
            })
        );
    } catch (e: any) {
        yield put(
            fetchInterestListFailure({
                error: e.message,
            })
        );
    }
    yield put(updateLoading(false));
}

/*
  Starts worker saga on latest dispatched `FETCH_USER_REQUEST` action.
  Allows concurrent increments.
*/
function* interestsSaga(): any {
    yield all([takeLatest(FETCH_INTEREST_REQUEST, fetchInterestsSaga)]);
}

export default interestsSaga;

