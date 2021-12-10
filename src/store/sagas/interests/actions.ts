import {
    FETCH_INTEREST_REQUEST,
    FETCH_INTEREST_SUCCESS,
    FETCH_INTEREST_FAILURE } from "./actionTypes";
import {
    FetchInterestsRequest,
    FetchInterestsSuccess,
    FetchInterestsFailure,
    FetchInterestsFailurePayload,
    FetchInterestsSuccessPayload
} from "./types";

export const fetchInterestListRequest = (): FetchInterestsRequest => ({
    type: FETCH_INTEREST_REQUEST,
    loading: true
});

export const fetchInterestListSuccess = (payload: FetchInterestsSuccessPayload): FetchInterestsSuccess => ({
    type: FETCH_INTEREST_SUCCESS,
    payload,
    loading: false
});

export const fetchInterestListFailure = (payload: FetchInterestsFailurePayload): FetchInterestsFailure => ({
    type: FETCH_INTEREST_FAILURE,
    payload,
    loading: false
});
