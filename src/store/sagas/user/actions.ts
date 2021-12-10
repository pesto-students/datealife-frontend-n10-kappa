import {
    FETCH_USER_REQUEST,
    FETCH_USER_FAILURE,
    CREATE_USER_REQUEST,
    UPDATE_USER_REQUEST,
    DELETE_USER_REQUEST,
    SEND_EMAIL_REQUEST,
} from "./actionTypes";
import {
    FetchUserRequest,
    FetchUserFailure,
    FetchUserFailurePayload,
    FetchUserRequestPayload,
    CreateUserRequest,
    UpdateUserRequest,
    UserInfo,
    DeleteUserRequestPayload,
    DeleteUserRequest,
    SendEmailPayload,
    SendEmailRequest,
} from "./types";

export const fetchUserRequest = (payload: FetchUserRequestPayload): FetchUserRequest => ({
    type: FETCH_USER_REQUEST,
    payload,
});

export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUserFailure => ({
    type: FETCH_USER_FAILURE,
    payload,
});

export const createUserRequest = (payload: UserInfo): CreateUserRequest => ({
    type: CREATE_USER_REQUEST,
    payload,
});

export const updateUserRequest = (payload: UserInfo): UpdateUserRequest => ({
    type: UPDATE_USER_REQUEST,
    payload,
});

export const deleteUserRequest = (payload: DeleteUserRequestPayload): DeleteUserRequest => ({
    type: DELETE_USER_REQUEST,
    payload,
});

export const sendEmail = (payload: SendEmailPayload): SendEmailRequest => ({
    type: SEND_EMAIL_REQUEST,
    payload,
});
