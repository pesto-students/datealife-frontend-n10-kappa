import { FETCH_LEARNING_LIST_REQUEST,
        FETCH_LEARNING_LIST_SUCCESS,
        FETCH_LEARNING_LIST_FAILURE,
        FETCH_LEARNING_REQUEST,
        FETCH_LEARNING_SUCCESS,
        FETCH_LEARNINGS_FAILURE } from "./actionTypes";
import {
    FetchLearningListSuccessPayload,
    FetchLearningListFailurePayload,
    FetchLearningListRequest,
    FetchLearningListSuccess,
    FetchLearningListFailure,
    FetchLearningRequestPayload,
    FetchLearningSuccessPayload,
    FetchLearningFailurePayload,
    FetchLearningRequest,
    FetchLearningSuccess,
    FetchLearningFailure
} from "./types";

export const fetchLearningListRequest = (): FetchLearningListRequest => ({
    type: FETCH_LEARNING_LIST_REQUEST,
    loading: true
});

export const fetchLearningListSuccess = (payload: FetchLearningListSuccessPayload): FetchLearningListSuccess => ({
    type: FETCH_LEARNING_LIST_SUCCESS,
    payload,
    loading: false
});

export const fetchLearningListFailure = (payload: FetchLearningListFailurePayload): FetchLearningListFailure => ({
    type: FETCH_LEARNING_LIST_FAILURE,
    payload,
    loading: false
});

export const fetchLearningRequest = (payload: FetchLearningRequestPayload): FetchLearningRequest => ({
    type: FETCH_LEARNING_REQUEST,
    payload,
    loading: true
});

export const fetchLearningSuccess = (payload: FetchLearningSuccessPayload): FetchLearningSuccess => ({
    type: FETCH_LEARNING_SUCCESS,
    payload,
    loading: false

});

export const fetchLearningFailure = (payload: FetchLearningFailurePayload): FetchLearningFailure => ({
    type: FETCH_LEARNINGS_FAILURE,
    payload,
    loading: false
});


