import {
    FETCH_USER_LISTING_REQUEST,
    FETCH_USER_LISTING_FAILURE,
    FETCH_USER_LISTING_SUCCESS,
    FETCH_USER_LISTING_TYPE_REQUEST,
    FETCH_USER_LISTING_TYPE_FAILURE,
    FETCH_USER_LISTING_TYPE_SUCCESS,
    FETCH_USER_SUGGESTIONS_REQUEST,
    FETCH_USER_SUGGESTIONS_FAILURE,
    FETCH_USER_SUGGESTIONS_SUCCESS,
    UPDATE_USER_LISTING_REQUEST,
    UPDATE_USER_LISTING_FAILURE,
    UPDATE_USER_LISTING_SUCCESS,
} from "./actionTypes";
import {
    FetchUserListingFailure,
    FetchUserListingFailurePayload,
    FetchUserListingRequest,
    FetchUserListingRequestPayload,
    FetchUserListingSuccess,
    FetchUserListingSuccessPayload,
    FetchUserListingTypeFailure,
    FetchUserListingTypeFailurePayload,
    FetchUserListingTypeRequest,
    FetchUserListingTypeRequestPayload,
    FetchUserListingTypeSuccess,
    FetchUserListingTypeSuccessPayload,
    FetchUserSuggestionsFailure,
    FetchUserSuggestionsFailurePayload,
    FetchUserSuggestionsRequest,
    FetchUserSuggestionsRequestPayload,
    FetchUserSuggestionsSuccess,
    FetchUserSuggestionsSuccessPayload,
    UpdateUserListingFailure,
    UpdateUserListingFailurePayload,
    UpdateUserListingRequest,
    UpdateUserListingRequestPayload,
    UpdateUserListingSuccess,
    UpdateUserListingSuccessPayload,
} from "./types";

export const fetchUserListingRequest = (payload: FetchUserListingRequestPayload): FetchUserListingRequest => ({
    type: FETCH_USER_LISTING_REQUEST,
    payload,
    loading: true,
});

export const fetchUserListingSuccess = (payload: FetchUserListingSuccessPayload): FetchUserListingSuccess => ({
    type: FETCH_USER_LISTING_SUCCESS,
    payload,
    loading: false,
});

export const fetchUserListingFailure = (payload: FetchUserListingFailurePayload): FetchUserListingFailure => ({
    type: FETCH_USER_LISTING_FAILURE,
    payload,
    loading: false,
});

export const fetchUserListingTypeRequest = (payload: FetchUserListingTypeRequestPayload): FetchUserListingTypeRequest => ({
    type: FETCH_USER_LISTING_TYPE_REQUEST,
    payload,
    loading: true,
});

export const fetchUserListingTypeSuccess = (payload: FetchUserListingTypeSuccessPayload): FetchUserListingTypeSuccess => ({
    type: FETCH_USER_LISTING_TYPE_SUCCESS,
    payload,
    loading: false,
});

export const fetchUserListingTypeFailure = (payload: FetchUserListingTypeFailurePayload): FetchUserListingTypeFailure => ({
    type: FETCH_USER_LISTING_TYPE_FAILURE,
    payload,
    loading: false,
});

export const fetchUserSuggestionsRequest = (payload: FetchUserSuggestionsRequestPayload): FetchUserSuggestionsRequest => ({
    type: FETCH_USER_SUGGESTIONS_REQUEST,
    payload,
    loading: true,
});

export const fetchUserSuggestionsSuccess = (payload: FetchUserSuggestionsSuccessPayload): FetchUserSuggestionsSuccess => ({
    type: FETCH_USER_SUGGESTIONS_SUCCESS,
    payload,
    loading: false,
});

export const fetchUserSuggestionsFailure = (payload: FetchUserSuggestionsFailurePayload): FetchUserSuggestionsFailure => ({
    type: FETCH_USER_SUGGESTIONS_FAILURE,
    payload,
    loading: false,
});

export const updateUserListingRequest = (payload: UpdateUserListingRequestPayload): UpdateUserListingRequest => ({
    type: UPDATE_USER_LISTING_REQUEST,
    payload,
    loading: true,
});

export const updateUserListingSuccess = (payload: UpdateUserListingSuccessPayload): UpdateUserListingSuccess => ({
    type: UPDATE_USER_LISTING_SUCCESS,
    payload,
    loading: false,
});

export const updateUserListingFailure = (payload: UpdateUserListingFailurePayload): UpdateUserListingFailure => ({
    type: UPDATE_USER_LISTING_FAILURE,
    payload,
    loading: false,
});
