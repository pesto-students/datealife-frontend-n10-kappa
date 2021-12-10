import { FETCH_INTEREST_REQUEST,
         FETCH_INTEREST_SUCCESS,
         FETCH_INTEREST_FAILURE } from "./actionTypes";

export interface Interests {
    value: string;
}

export interface InterestsList {
    interests: Interests[];
}

export interface FetchInterestsSuccessPayload {
    interests: Interests[];
}

export interface FetchInterestsFailurePayload {
    error: string;
}

export interface FetchInterestsRequest {
    type: typeof FETCH_INTEREST_REQUEST;
    loading: boolean;
}

export type FetchInterestsSuccess = {
    type: typeof FETCH_INTEREST_SUCCESS;
    payload: FetchInterestsSuccessPayload;
    loading: boolean;
};

export type FetchInterestsFailure = {
    type: typeof FETCH_INTEREST_FAILURE;
    payload: FetchInterestsFailurePayload;
    loading: boolean;
};


export type LearningListActions = FetchInterestsRequest | FetchInterestsSuccess | FetchInterestsFailure;
