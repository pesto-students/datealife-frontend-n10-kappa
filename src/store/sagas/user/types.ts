import { ThirdPartyUser } from "../../../auth";
import { UserInfo } from "../../reducers/login";
import { FETCH_USER_REQUEST, FETCH_USER_FAILURE, CREATE_USER_REQUEST, UPDATE_USER_REQUEST } from "./actionTypes";

export interface FetchUserRequestPayload {
    user: ThirdPartyUser;
}

export interface FetchUserFailurePayload {
    message: string;
}

export interface FetchUserRequest {
    type: typeof FETCH_USER_REQUEST;
    payload: FetchUserRequestPayload;
}

export type FetchUserFailure = {
    type: typeof FETCH_USER_FAILURE;
    payload: FetchUserFailurePayload;
};

export type CreateUserRequest = {
    type: typeof CREATE_USER_REQUEST;
    payload: UserInfo;
};

export type UpdateUserRequest = {
    type: typeof UPDATE_USER_REQUEST;
    payload: UserInfo;
};

export type UserActions = FetchUserRequest | FetchUserFailure | CreateUserRequest | UpdateUserRequest;
