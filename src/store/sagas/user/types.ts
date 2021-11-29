import { ThirdPartyUser } from "../../../auth";
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./actionTypes";

export interface IUser {
    id: number;
    name: string;
    userName: string;
    email: string;
    phone: string;
}

export interface UserState {
    users: IUser[];
    error: string | null;
    loading: boolean;
}

export interface FetchUserRequestPayload {
    user: ThirdPartyUser;
}

export interface FetchUserSuccessPayload {
    users: IUser[];
}

export interface FetchUserFailurePayload {
    error: string;
}

export interface FetchUserRequest {
    type: typeof FETCH_USER_REQUEST;
    payload: FetchUserRequestPayload;
}

export type FetchUserSuccess = {
    type: typeof FETCH_USER_SUCCESS;
    payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
    type: typeof FETCH_USER_FAILURE;
    payload: FetchUserFailurePayload;
};

export type UserActions = FetchUserRequest | FetchUserSuccess | FetchUserFailure;
