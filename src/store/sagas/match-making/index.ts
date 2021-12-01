import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    FetchUserListingRequestPayload,
    FetchUserSuggestionsRequest,
    FetchUserSuggestionsRequestPayload,
    UpdateUserListingRequestPayload,
    FetchUserListingRequest,
    UpdateUserListingRequest,
} from "./types";
import { UserInfo } from "../user/types";
import { fetchUserListingFailure, fetchUserSuggestionsFailure, updateUserListingFailure } from "./actions";
import { FETCH_USER_LISTING_REQUEST, FETCH_USER_SUGGESTIONS_REQUEST, UPDATE_USER_LISTING_REQUEST } from "./actionTypes";
import { API_BASE_URL } from "../../../const";
import { saveListings, saveSuggestions, updateListing } from "../../reducers/matchMaking";

const getUserListingApi = ({ userId, listingType }: FetchUserListingRequestPayload) =>
    axios.get<UserInfo>(`${API_BASE_URL}/user/${userId}/listing/${listingType}`);

const postUserListingApi = ({ userId, selectedUser, listingType }: UpdateUserListingRequestPayload) =>
    axios.post<UserInfo>(`${API_BASE_URL}/user/${userId}/listing/${listingType}`, selectedUser);

const getUserSuggestionsApi = ({ userId }: FetchUserSuggestionsRequestPayload) =>
    axios.get<UserInfo>(`${API_BASE_URL}/user/${userId}/matchMaking`);

/*
  Worker Saga: Fired on FETCH_USER_SUGGESTIONS_REQUEST action
*/
function* fetchUserSuggestionsSaga({ payload }: FetchUserSuggestionsRequest) {
    try {
        const response: AxiosResponse<UserInfo[]> = yield call(getUserSuggestionsApi, payload);
        const suggestions = response.data;

        if (!suggestions) {
            throw new Error(`Not able to find suggestions for user ${payload.userId}`);
        }

        yield put(
            saveSuggestions({
                suggestions,
                loading: false,
            })
        );
    } catch (e: any) {
        yield put(
            fetchUserSuggestionsFailure({
                error: e.message,
            })
        );
    }
}

/*
  Worker Saga: Fired on FETCH_USER_LISTING_REQUEST action
*/
function* fetchUserListingSaga({ payload }: FetchUserListingRequest) {
    try {
        const response: AxiosResponse<UserInfo[]> = yield call(getUserListingApi, payload);
        const listingData = response.data;

        if (!listingData) {
            throw new Error(`Not able to find user listings for ${payload.userId} user`);
        }

        yield put(
            saveListings({
                listingData,
                listingType: payload.listingType,
                loading: false,
            })
        );
    } catch (e: any) {
        yield put(
            fetchUserListingFailure({
                error: e.message,
            })
        );
    }
}

/*
  Worker Saga: Fired on UPDTAE_USER_LISTING_REQUEST action
*/
function* updateUserListingSaga({ payload }: UpdateUserListingRequest) {
    try {
        const response: AxiosResponse<UserInfo> = yield call(postUserListingApi, payload);
        const updatedData = response.data;

        if (!updatedData) {
            throw new Error(`Not able to update user listings for ${payload.userId} user`);
        }

        yield put(
            updateListing({
                listingType: payload.listingType,
                updatedData,
                loading: false,
            })
        );
    } catch (e: any) {
        yield put(
            updateUserListingFailure({
                error: e.message,
            })
        );
    }
}

function* matchMakingSaga(): any {
    yield all([
        takeLatest(FETCH_USER_SUGGESTIONS_REQUEST, fetchUserSuggestionsSaga),
        takeLatest(FETCH_USER_LISTING_REQUEST, fetchUserListingSaga),
        takeLatest(UPDATE_USER_LISTING_REQUEST, updateUserListingSaga),
    ]);
}

export default matchMakingSaga;
