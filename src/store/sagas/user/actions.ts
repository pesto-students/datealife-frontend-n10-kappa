import { UserInfo } from "../../reducers/login";
import { FETCH_USER_REQUEST, FETCH_USER_FAILURE, CREATE_USER_REQUEST } from "./actionTypes";
import { FetchUserRequest, FetchUserFailure, FetchUserFailurePayload, FetchUserRequestPayload, CreateUserRequest } from "./types";

export const fetchUserRequest = (payload: FetchUserRequestPayload): FetchUserRequest => ({
    type: FETCH_USER_REQUEST,
    payload,
});

export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUserFailure => ({
    type: FETCH_USER_FAILURE,
    payload,
});

export const createUser = (payload: UserInfo): CreateUserRequest => ({
    type: CREATE_USER_REQUEST,
    payload,
});
