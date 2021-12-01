import { createSlice } from "@reduxjs/toolkit";

import { UserInfo } from "../sagas/user/types";
import { ListingData } from "../sagas/match-making/types";

type matchMakingState = {
    suggestions: UserInfo[];
    listings: ListingData;
    loading: boolean;
};

const initialState: matchMakingState = {
    suggestions: [],
    listings: {},
    loading: false,
};

type State = { matchMaking: matchMakingState };

export const matchMakingSlice = createSlice({
    name: "matchMaking",
    initialState,
    reducers: {
        saveSuggestions: (state, action) => {
            const { suggestions, loading } = action.payload;
            state.suggestions = suggestions;
            state.loading = loading;
        },
        saveListings: (state, action) => {
            const { listingData, listingType, loading } = action.payload;
            state.listings[listingType] = listingData;
            state.loading = loading;
        },
        updateListing: (state, action) => {
            const { listingType, updatedData, loading } = action.payload;
            const { uid } = updatedData;
            state.listings[listingType] = { ...state.listings[listingType], [uid]: updatedData };
            state.loading = loading;
        },
    },
});

export const getUserSuggestions = (state: State): UserInfo[] => {
    return state.matchMaking.suggestions;
};
export const getListingData = (state: State): ListingData => state.matchMaking.listings;
export const isLoading = (state: State): boolean => state.matchMaking.loading;

// Action creators are generated for each case reducer function
export const { saveSuggestions, saveListings, updateListing } = matchMakingSlice.actions;

export default matchMakingSlice.reducer;
