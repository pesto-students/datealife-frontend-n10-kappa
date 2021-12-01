import { FETCH_LEARNING_LIST_REQUEST,
         FETCH_LEARNING_LIST_SUCCESS,
         FETCH_LEARNING_LIST_FAILURE,
         FETCH_LEARNING_REQUEST,
         FETCH_LEARNING_SUCCESS,
         FETCH_LEARNINGS_FAILURE } from "./actionTypes";


export interface Learning {
    id: string;
    title: string;
    description: string;
    author: string;
    imgUrl: string;
}

export interface LearningsListState {
    learning: Learning[];
    error: string | null;
    loading: boolean;
}

export interface LearningsState {
    learning: Learning;
    error: string | null;
    loading: boolean;
}

export interface FetchLearningListSuccessPayload {
    learning: Learning[];
}

export interface FetchLearningListFailurePayload {
    error: string;
}

export interface FetchLearningRequestPayload {
    learningId: string;
}

export interface FetchLearningSuccessPayload {
    learning: Learning;
}

export interface FetchLearningFailurePayload {
    error: string;
}

export interface FetchLearningListRequest {
    type: typeof FETCH_LEARNING_LIST_REQUEST;
    loading: boolean;
}

export type FetchLearningListSuccess = {
    type: typeof FETCH_LEARNING_LIST_SUCCESS;
    payload: FetchLearningListSuccessPayload;
    loading: boolean;
};

export type FetchLearningListFailure = {
    type: typeof FETCH_LEARNING_LIST_FAILURE;
    payload: FetchLearningListFailurePayload;
    loading: boolean;
};

export interface FetchLearningRequest {
    type: typeof FETCH_LEARNING_REQUEST;
    payload: FetchLearningRequestPayload;
    loading: boolean;
};

export type FetchLearningSuccess = {
    type: typeof FETCH_LEARNING_SUCCESS;
    payload: FetchLearningSuccessPayload;
    loading: boolean;
};

export type FetchLearningFailure = {
    type: typeof FETCH_LEARNINGS_FAILURE;
    payload: FetchLearningFailurePayload;
    loading: boolean;
};


export type LearningListActions = FetchLearningListRequest | FetchLearningListSuccess | FetchLearningListFailure;
