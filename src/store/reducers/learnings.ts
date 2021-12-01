import { createSlice } from "@reduxjs/toolkit";
import {Learning, LearningsState} from "../sagas/learning/types";

type learningState = {
    learnings: Learning[],
    currentLearning: Learning
    loading: boolean
};

const initialState: learningState = {
    learnings: [{} as Learning],
    currentLearning: {} as Learning,
    loading: false
};

export const learningsSlice = createSlice({
    name: "learnings",
    initialState,
    reducers: {
        saveLearnings: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const { learnings, loading } = action.payload;
            state.learnings = learnings;
            state.loading = loading;
        },
        saveCurrentLearning: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const { learning, loading } = action.payload;
            state.currentLearning = learning;
            state.loading = loading;
        },
    },
});

export const getLearningList = (state: { learning: learningState }): Learning[] => state.learning.learnings;
export const getCurrentLearning = (state: { learning: learningState }): Learning => state.learning.currentLearning;
export const isLoading = (state: { learning: learningState }): boolean => state.learning.loading;

// Action creators are generated for each case reducer function
export const { saveLearnings, saveCurrentLearning } = learningsSlice.actions;

export default learningsSlice.reducer;
