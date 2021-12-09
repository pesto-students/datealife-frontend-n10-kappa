import {
    FETCH_USER_REQUEST,
    FETCH_USER_FAILURE,
    CREATE_USER_REQUEST,
    UPDATE_USER_REQUEST,
    DELETE_USER_REQUEST,
} from "./actionTypes";

export type UserInfo = {
    uid?: string;
    fullName?: string;
    profilePicture?: string;
    dob?: number;
    gender?: string;
    orientation?: string;
    profession?: string;
    interests?: string[];
    pictures?: string[];
    age?: string;
    bioData?: string;
    companyName?: string;
};

export interface FetchUserRequestPayload {
    userId: string;
}

export interface DeleteUserRequestPayload {
    userId: string;
}

export interface FetchUserFailurePayload {
    error: string;
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

export type DeleteUserRequest = {
    type: typeof DELETE_USER_REQUEST;
    payload: DeleteUserRequestPayload;
};

export type UserActions = FetchUserRequest | FetchUserFailure | CreateUserRequest | UpdateUserRequest;
