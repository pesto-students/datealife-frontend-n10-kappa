import {
    FETCH_USER_LISTING_REQUEST,
    FETCH_USER_LISTING_FAILURE,
    FETCH_USER_LISTING_SUCCESS,
    FETCH_USER_SUGGESTIONS_REQUEST,
    FETCH_USER_SUGGESTIONS_FAILURE,
    FETCH_USER_SUGGESTIONS_SUCCESS,
    UPDATE_USER_LISTING_REQUEST,
    UPDATE_USER_LISTING_FAILURE,
    UPDATE_USER_LISTING_SUCCESS,
    FETCH_USER_LISTING_TYPE_SUCCESS,
    FETCH_USER_LISTING_TYPE_FAILURE,
    FETCH_USER_LISTING_TYPE_REQUEST,
} from "./actionTypes";
import { UserInfo } from "../user/types";

export type InvitationInfo = {
    bookingType: string;
    proposedDate: string;
    requestAccepted: boolean;
};

export interface ListingData {
    [listingType: string]: ListingTypeData;
}

export interface ListingTypeData {
    [uid: string]: {
        uid: string;
        fullName: string;
        profilePicture: string;
        invitationInfo?: InvitationInfo;
    };
}

export interface FetchUserListingRequestPayload {
    userId: string;
}

export interface FetchUserListingSuccessPayload {
    listings: ListingData;
}

export interface FetchUserListingFailurePayload {
    error: string;
}

export interface FetchUserListingTypeRequestPayload {
    userId: string;
    listingType: string;
}

export interface FetchUserListingTypeSuccessPayload {
    listings: ListingData;
}

export interface FetchUserListingTypeFailurePayload {
    error: string;
}

export interface FetchUserSuggestionsRequestPayload {
    user: UserInfo;
}

export interface FetchUserSuggestionsSuccessPayload {
    suggestions: UserInfo[];
}

export interface FetchUserSuggestionsFailurePayload {
    error: string;
}

export interface UpdateUserListingRequestPayload {
    userId: string;
    selectedUser: UserInfo;
    listingType: string;
}

export interface UpdateUserListingSuccessPayload {
    suggestions: UserInfo[];
}

export interface UpdateUserListingFailurePayload {
    error: string;
}

export interface FetchUserListingRequest {
    type: typeof FETCH_USER_LISTING_REQUEST;
    payload: FetchUserListingRequestPayload;
    loading: boolean;
}

export type FetchUserListingSuccess = {
    type: typeof FETCH_USER_LISTING_SUCCESS;
    payload: FetchUserListingSuccessPayload;
    loading: boolean;
};

export type FetchUserListingFailure = {
    type: typeof FETCH_USER_LISTING_FAILURE;
    payload: FetchUserListingFailurePayload;
    loading: boolean;
};

export interface FetchUserListingTypeRequest {
    type: typeof FETCH_USER_LISTING_TYPE_REQUEST;
    payload: FetchUserListingTypeRequestPayload;
    loading: boolean;
}

export type FetchUserListingTypeSuccess = {
    type: typeof FETCH_USER_LISTING_TYPE_SUCCESS;
    payload: FetchUserListingTypeSuccessPayload;
    loading: boolean;
};

export type FetchUserListingTypeFailure = {
    type: typeof FETCH_USER_LISTING_TYPE_FAILURE;
    payload: FetchUserListingTypeFailurePayload;
    loading: boolean;
};

export interface FetchUserSuggestionsRequest {
    type: typeof FETCH_USER_SUGGESTIONS_REQUEST;
    payload: FetchUserSuggestionsRequestPayload;
    loading: boolean;
}

export type FetchUserSuggestionsSuccess = {
    type: typeof FETCH_USER_SUGGESTIONS_SUCCESS;
    payload: FetchUserSuggestionsSuccessPayload;
    loading: boolean;
};

export type FetchUserSuggestionsFailure = {
    type: typeof FETCH_USER_SUGGESTIONS_FAILURE;
    payload: FetchUserSuggestionsFailurePayload;
    loading: boolean;
};

export interface UpdateUserListingRequest {
    type: typeof UPDATE_USER_LISTING_REQUEST;
    payload: UpdateUserListingRequestPayload;
    loading: boolean;
}

export type UpdateUserListingSuccess = {
    type: typeof UPDATE_USER_LISTING_SUCCESS;
    payload: UpdateUserListingSuccessPayload;
    loading: boolean;
};

export type UpdateUserListingFailure = {
    type: typeof UPDATE_USER_LISTING_FAILURE;
    payload: UpdateUserListingFailurePayload;
    loading: boolean;
};

export type MatchMakingListActions =
    | FetchUserListingTypeRequest
    | FetchUserListingTypeSuccess
    | FetchUserListingTypeFailure
    | FetchUserSuggestionsRequest
    | FetchUserSuggestionsSuccess
    | FetchUserSuggestionsFailure
    | UpdateUserListingRequest
    | UpdateUserListingSuccess
    | UpdateUserListingFailure;
