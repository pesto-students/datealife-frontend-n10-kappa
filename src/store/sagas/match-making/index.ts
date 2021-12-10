import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest, select } from "redux-saga/effects";

import {
    FetchUserListingRequestPayload,
    FetchUserSuggestionsRequest,
    FetchUserSuggestionsRequestPayload,
    UpdateUserListingRequestPayload,
    FetchUserListingRequest,
    UpdateUserListingRequest,
    FetchUserListingTypeRequest,
    FetchUserListingTypeRequestPayload,
} from "./types";
import { UserInfo } from "../user/types";
import {
    fetchUserListingFailure,
    fetchUserListingRequest,
    fetchUserListingTypeFailure,
    fetchUserSuggestionsFailure,
    updateUserListingFailure,
} from "./actions";
import {
    FETCH_USER_LISTING_REQUEST,
    FETCH_USER_LISTING_TYPE_REQUEST,
    FETCH_USER_SUGGESTIONS_REQUEST,
    UPDATE_USER_LISTING_REQUEST,
} from "./actionTypes";
import { API_BASE_URL } from "../../../const";
import {
    saveCurrentSuggestion,
    saveListings,
    saveListingType,
    saveSuggestions,
    updateIsAMatch,
    updateListing,
} from "../../reducers/matchMaking";
import { getLoggedInUser, updateLoading } from "../../reducers/user";
import { sendEmail } from "../user/actions";

const getUserListingApi = ({ userId }: FetchUserListingRequestPayload) =>
    axios.get<UserInfo>(`${API_BASE_URL}/user/${userId}/listing`);

const getUserListingTypeApi = ({ userId, listingType }: FetchUserListingTypeRequestPayload) =>
    axios.get<UserInfo>(`${API_BASE_URL}/user/${userId}/${listingType}`);

const postUserListingApi = ({ userId, selectedUser, listingType, invitationInfo }: UpdateUserListingRequestPayload) =>
    axios.post<UserInfo>(`${API_BASE_URL}/user/${userId}/${listingType}`, { selectedUser, invitationInfo });

const getUserSuggestionsApi = ({ user }: FetchUserSuggestionsRequestPayload) =>
    axios.post<string, UserInfo>(`${API_BASE_URL}/match-making`, user);

/*
  Worker Saga: Fired on FETCH_USER_SUGGESTIONS_REQUEST action
*/
function* fetchUserSuggestionsSaga({ payload }: FetchUserSuggestionsRequest) {
    try {
        yield put(fetchUserListingRequest({ userId: payload.user.uid as string }));
        const response: AxiosResponse<UserInfo[]> = yield call(getUserSuggestionsApi, payload);
        const suggestions = response.data;

        if (!suggestions) {
            throw new Error(`Not able to find suggestions for user ${payload.user.uid}`);
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
    yield put(updateLoading(false));
}

/*
  Worker Saga: Fired on FETCH_USER_LISTING_REQUEST action
*/
function* fetchUserListingSaga({ payload }: FetchUserListingRequest) {
    try {
        const response: AxiosResponse<UserInfo[]> = yield call(getUserListingApi, payload);
        const listings = response.data;

        if (!listings) {
            throw new Error(`Not able to find user listings for ${payload.userId} user`);
        }

        yield put(
            saveListings({
                listings,
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
    yield put(updateLoading(false));
}

/*
  Worker Saga: Fired on FETCH_USER_LISTING_TPYE_REQUEST action
*/
function* fetchUserListingTypeSaga({ payload }: FetchUserListingTypeRequest) {
    try {
        const response: AxiosResponse<UserInfo[]> = yield call(getUserListingTypeApi, payload);
        const listingData = response.data;

        if (!listingData) {
            throw new Error(`Not able to find user listings for ${payload.userId} user`);
        }

        yield put(
            saveListingType({
                listingData,
                listingType: payload.listingType,
                loading: false,
            })
        );
    } catch (e: any) {
        yield put(
            fetchUserListingTypeFailure({
                error: e.message,
            })
        );
    }
    yield put(updateLoading(false));
}

/*
  Worker Saga: Fired on UPDTAE_USER_LISTING_REQUEST action
*/
function* updateUserListingSaga({ payload }: UpdateUserListingRequest) {
    try {
        yield put(updateIsAMatch(false));
        const response: AxiosResponse<{ res: any; isAMatch: boolean }> = yield call(postUserListingApi, payload);

        const { res: updatedData, isAMatch } = response.data;
        const { userId, listingType } = payload;

        if (!updatedData) {
            throw new Error(`Not able to update user listings for ${userId} user`);
        }

        if (isAMatch) {
            const loggedInUser: UserInfo = yield select(getLoggedInUser);
            yield put(
                sendEmail({
                    toUser: updatedData.emailId,
                    message: {
                        html: `You have a match with ${loggedInUser.fullName}`,
                        subject: "Match Notification",
                    },
                })
            );
        }

        yield put(updateIsAMatch(isAMatch));

        yield put(
            updateListing({
                listingType: isAMatch ? "matches" : listingType,
                updatedData,
                loading: false,
            })
        );
        if (listingType === "likes" || listingType === "dislikes") yield put(saveCurrentSuggestion());
    } catch (e: any) {
        yield put(
            updateUserListingFailure({
                error: e.message,
            })
        );
    }
    yield put(updateLoading(false));
}

export default function* matchMakingSaga(): any {
    yield all([
        takeLatest(FETCH_USER_SUGGESTIONS_REQUEST, fetchUserSuggestionsSaga),
        takeLatest(FETCH_USER_LISTING_REQUEST, fetchUserListingSaga),
        takeLatest(FETCH_USER_LISTING_TYPE_REQUEST, fetchUserListingTypeSaga),
        takeLatest(UPDATE_USER_LISTING_REQUEST, updateUserListingSaga),
    ]);
}
