import { createSlice } from "@reduxjs/toolkit";

import { UserInfo } from "../sagas/user/types";
import { ListingData, ListingTypeData } from "../sagas/match-making/types";

type matchMakingState = {
    suggestions: UserInfo[];
    currentSuggestion: UserInfo;
    nextSuggestionIndex: number;
    listings: ListingData;
    allListingType: ListingTypeData;
    loading: boolean;
};

const initialState: matchMakingState = {
    suggestions: [],
    currentSuggestion: {},
    nextSuggestionIndex: 0,
    listings: {},
    allListingType: {},
    loading: false,
};

const listingTypes = ["likes", "dislikes", "invites", "matches"];

type State = { matchMaking: matchMakingState };

export const matchMakingSlice = createSlice({
    name: "matchMaking",
    initialState,
    reducers: {
        saveSuggestions: (state, action) => {
            let { suggestions } = action.payload;
            const { loading, allListingType } = state;
            suggestions = suggestions.filter(({ uid }: UserInfo) => uid && !allListingType[uid]);
            state.currentSuggestion = suggestions[0] || {};
            state.nextSuggestionIndex = 1;
            state.suggestions = suggestions;
            state.loading = loading;
        },
        saveCurrentSuggestion: (state) => {
            const { nextSuggestionIndex, suggestions } = state;
            state.currentSuggestion = suggestions[nextSuggestionIndex] || {};
            state.nextSuggestionIndex++;
        },
        saveListings: (state, action) => {
            const { listings, loading } = action.payload;
            state.listings = listings;
            state.loading = loading;
            let allListingType: ListingTypeData = {};
            listingTypes.map((type) => {
                if (listings[type]) allListingType = { ...allListingType, ...listings[type] };
            });
            state.allListingType = allListingType;
        },
        saveListingType: (state, action) => {
            const { listingData, listingType, loading } = action.payload;
            state.listings[listingType] = listingData;
            state.loading = loading;
        },
        updateListing: (state, action) => {
            const { listingType, updatedData, loading } = action.payload;
            const { uid } = updatedData;
            state.listings[listingType] = { ...state.listings[listingType], [uid]: updatedData };
            state.loading = loading;
            state.allListingType[uid] = updatedData;
        },
        resetMatchMaking: (state) => {
            state.suggestions = [];
            state.currentSuggestion = {};
            state.nextSuggestionIndex = 0;
            state.listings = {};
            state.allListingType = {};
            state.loading = false;
        },
    },
});

export const getUserSuggestions = (state: State): UserInfo[] => {
    return state.matchMaking.suggestions;
};
export const getCurrentSuggestion = (state: State): UserInfo => {
    return state.matchMaking.currentSuggestion;
};
export const getListingData = (state: State): ListingData => state.matchMaking.listings;
export const isLoading = (state: State): boolean => state.matchMaking.loading;

// Action creators are generated for each case reducer function
export const { saveSuggestions, saveCurrentSuggestion, saveListings, saveListingType, updateListing, resetMatchMaking } =
    matchMakingSlice.actions;

export default matchMakingSlice.reducer;
