import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_BASE_URL } from "../../../const";
import { saveLearnings, saveCurrentLearning } from "../../reducers/learnings";
import { fetchLearningFailure, fetchLearningListFailure } from "./actions";
import { FETCH_LEARNING_LIST_REQUEST, FETCH_LEARNING_REQUEST } from "./actionTypes";
import { Learning, FetchLearningRequest } from "./types";

const getLearningList = () => axios.get<Learning[]>(`${API_BASE_URL}/learnings`);
const getLearning = (learningId: string | null | undefined) => axios.get<Learning>(`${API_BASE_URL}/learnings/${learningId}`);

/*
  Worker Saga: Fired on FETCH_LEARNING_REQUEST action
*/
function* fetchLearningListSaga() {
    try {
        const response: AxiosResponse<Learning[]> = yield call(getLearningList);
        const learningData = response.data;
        yield put(
            saveLearnings({
                learnings: learningData,
            })
        );
    } catch (e: any) {
        yield put(
            fetchLearningListFailure({
                error: e.message,
            })
        );
    }
}

function* fetchLearningSaga({ payload: { learningId } }: FetchLearningRequest) {
    try {
        const response: AxiosResponse<Learning> = yield call(getLearning, learningId);
        const learningData = response.data;
        yield put(
            saveCurrentLearning({
                learning: learningData
            })
        );
    } catch (e: any) {
        yield put(
            fetchLearningFailure({
                error: e.message,
            })
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_USER_REQUEST` action.
  Allows concurrent increments.
*/
function* learningsSaga(): any {
    yield all([takeLatest(FETCH_LEARNING_LIST_REQUEST, fetchLearningListSaga), takeLatest(FETCH_LEARNING_REQUEST, fetchLearningSaga) ]);
}

export default learningsSaga;

