import { FETCH_USER_REQUEST, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./actionTypes";
import {
    FetchUserRequest,
    FetchUserSuccess,
    FetchUserSuccessPayload,
    FetchUserFailure,
    FetchUserFailurePayload,
    FetchUserRequestPayload,
} from "./types";

export const fetchUserRequest = (payload: FetchUserRequestPayload): FetchUserRequest => ({
    type: FETCH_USER_REQUEST,
    payload,
});

export const fetchUserSuccess = (payload: FetchUserSuccessPayload): FetchUserSuccess => ({
    type: FETCH_USER_SUCCESS,
    payload,
});

export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUserFailure => ({
    type: FETCH_USER_FAILURE,
    payload,
});
