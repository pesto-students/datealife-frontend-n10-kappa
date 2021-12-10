import { createSlice } from "@reduxjs/toolkit";
import { Interests } from "../sagas/interests/types";

type interestsState = {
    interests: Interests[],
    loading: boolean;
};

const initialState: interestsState = {
    interests: [],
    loading: false,
};

export const interestsSlice = createSlice({
    name: "interests",
    initialState,
    reducers: {
        saveInterests: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const { interests, loading } = action.payload;
            state.interests = interests;
            state.loading = loading;
        },
    },
});

export const getInterests = (state: { interests: interestsState }): Interests[] => state.interests.interests;
export const isLoading = (state: { interest: interestsState }): boolean => state.interest.loading;

// Action creators are generated for each case reducer function
export const { saveInterests } = interestsSlice.actions;

export default interestsSlice.reducer;
